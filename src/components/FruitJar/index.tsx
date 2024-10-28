import React from 'react'
import useSelectedFruits from '@/hooks/useSelectedFruits'
import { useFruitsGrouping } from '@/hooks/useFruitsGrouping'
import { PieChart } from '@/components/PieChart'
import { ListView } from '../List'

const FruitJar: React.FC = () => {
	const { selectedFruits } = useSelectedFruits()

	const groupedFruits = useFruitsGrouping({ fruits: selectedFruits, groupBy: 'name' })

	const groupedFruitsEntries = Object.entries(groupedFruits)

	const listViewData = groupedFruitsEntries.map(([groupName, fruits]) => {
		return (
			<div className='grid grid-cols-3'>
				<p> {groupName}</p>
				<p> {fruits.length} items</p>
				<p> {fruits.reduce((sum, { nutritions: { calories } }) => sum + calories, 0)} kcal</p>
			</div>
		)
	})

	return (
		<div className='sticky top-10 pb-5'>
			<div className='item-center flex justify-between'>
				<h2 className='font-extrabold'>Selected Fruits (In the Jar)</h2>
				<h2 className='font-extrabold'>{`${selectedFruits.length} fruits`}</h2>
			</div>

			<PieChart selectedFruits={selectedFruits} groupedFruits={groupedFruits} />

			{groupedFruitsEntries.length > 0 ? (
				<ListView data={listViewData} fruits={selectedFruits} removeButton />
			) : (
				<div className='text-center'>No fruits selected</div>
			)}
		</div>
	)
}

export { FruitJar }
