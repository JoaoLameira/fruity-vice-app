import React, { useMemo } from 'react'
import useJarFruits from '@/hooks/useJarFruits'
import { useFruitsGrouping } from '@/hooks/useFruitsGrouping'
import { PieChart } from '@/components/PieChart'
import { ListView } from '@/components/List'
import { RemoveFromJar } from '../Buttons/RemoveFromJar'

const FruitJar: React.FC = () => {
	const { selectedFruits } = useJarFruits()
	const groupedFruits = useFruitsGrouping({ fruits: selectedFruits, groupBy: 'name' })
	const groupedFruitsEntries = Object.entries(groupedFruits ?? {})

	const selectedListView = useMemo(
		() =>
			groupedFruitsEntries.map(([name, fruits]) => {
				const fruitToRemove = fruits[fruits.findIndex(fruit => fruit.name === name)]
				const calories = fruits.reduce((sum, { nutritions: { calories } }) => sum + calories, 0)
				return (
					<>
						<ul className='grid w-full grid-cols-3'>
							<li> {name}</li>
							<li> {fruits.length} items</li>
							<li> {calories} kcal</li>
						</ul>
						<RemoveFromJar fruit={fruitToRemove} />
					</>
				)
			}),
		[groupedFruitsEntries]
	)

	return (
		<div className='sticky top-10 pb-5'>
			<header className='item-center flex justify-between'>
				<h2 className='font-extrabold'>Selected Fruits (In the Jar)</h2>
				<h3 className='font-extrabold'>{`${selectedFruits.length} fruits`}</h3>
			</header>

			<PieChart selectedFruits={selectedFruits} groupedFruits={groupedFruits} />

			<ListView data={selectedListView} />
		</div>
	)
}

export { FruitJar }
