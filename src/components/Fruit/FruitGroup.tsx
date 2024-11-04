import { Fruit, GroupByType } from '@/types'
import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { useViewType } from '@/hooks/useViewtype'
import { TableView } from '@/components/Table'
import { ListView } from '@/components/List'
import { useFruitsGrouping } from '@/hooks/useFruitsGrouping'
import { useAtomValue } from 'jotai'
import { groupByAtom } from '@/atoms'
import { AddAllToJar } from '@/components/Buttons/AddAllToJar'

interface FruitGroupProps {
	fruits: Fruit[]
}

const FruitGroup: React.FC<FruitGroupProps> = ({ fruits }) => {
	const { viewType } = useViewType()
	const groupBy = useAtomValue<GroupByType>(groupByAtom)
	const groupedFruits = useFruitsGrouping({ fruits, groupBy })
	const groupedFruitsKeys = Object.keys(groupedFruits)
	const isFlatList = groupedFruitsKeys.length == 1 && groupedFruitsKeys.includes('all')

	const renderFruit = (fruits: Fruit[]) => {
		const dataForListView = fruits.map(({ name, nutritions: { calories } }) => `${name} (${calories} kcal)`)
		return viewType === 'list' ? (
			<ListView data={dataForListView} fruits={fruits} addButton />
		) : (
			<TableView data={fruits} />
		)
	}

	if (isFlatList) return renderFruit(fruits)

	return (
		<Accordion type='multiple'>
			{Object.entries(groupedFruits).map(([groupName, fruits], index) => (
				<AccordionItem value={`items-${index}`} key={`items-${index}`}>
					<AccordionTrigger>
						<div className='flex w-full justify-between'>
							<p>{groupName}</p>
							<div className='mr-5'>
								<AddAllToJar fruits={fruits} />
							</div>
						</div>
					</AccordionTrigger>
					<AccordionContent>{renderFruit(fruits)}</AccordionContent>
				</AccordionItem>
			))}
		</Accordion>
	)
}

export { FruitGroup }
