import React from 'react'
import { Label, Pie, PieChart as RechartsPieChart } from 'recharts'
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'
import { generateGrayShades } from '@/utils/colors'
import { Fruit, IFruitGroup } from '@/types'

interface IPieChartProps {
	selectedFruits: Fruit[]
	groupedFruits: IFruitGroup
}

const CustomPieChart: React.FC<IPieChartProps> = ({ selectedFruits, groupedFruits }) => {
	const totalCalories = selectedFruits.reduce((sum, { nutritions: { calories } }) => sum + calories, 0)
	const groupedFruitsEntries = Object.entries(groupedFruits)
	const colors = generateGrayShades(groupedFruitsEntries.length)

	const chartData = groupedFruitsEntries.map(([groupName, fruits], index) => ({
		browser: groupName,
		visitors: fruits.length,
		fill: colors[index]
	}))

	const chartConfig = {
		...groupedFruitsEntries.map(([groupName]) => ({
			label: groupName
		}))
	} as ChartConfig

	return (
		<ChartContainer config={chartConfig} className='mx-auto aspect-square max-h-[50vh]'>
			<RechartsPieChart>
				<ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
				<Pie data={chartData} dataKey='visitors' nameKey='browser' innerRadius={140} strokeWidth={5}>
					<Label
						content={({ viewBox }) => {
							if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
								return (
									<text x={viewBox.cx} y={viewBox.cy} textAnchor='middle' dominantBaseline='middle'>
										<tspan x={viewBox.cx} y={viewBox.cy} className='fill-foreground text-6xl font-extrabold'>
											{totalCalories}
										</tspan>
										<tspan
											x={viewBox.cx}
											y={viewBox.cy ? viewBox.cy + 40 : 0}
											className='fill-muted-foreground text-2xl'
										>
											calories
										</tspan>
									</text>
								)
							}
						}}
					/>
				</Pie>
			</RechartsPieChart>
		</ChartContainer>
	)
}

export { CustomPieChart as PieChart }
