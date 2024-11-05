import React from 'react'
import useFruits from '@/hooks/useFruits'
import { toast } from 'sonner'
import { FruitView } from '@/components/Fruit/FruitView'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { AddAllToJar } from '@/components/Buttons/AddAllToJar'
import { useAtomValue } from 'jotai'
import { GroupByType } from '@/types'
import { groupByAtom } from '@/atoms'
import { useFruitsGrouping } from '@/hooks/useFruitsGrouping'

const FruitList: React.FC = () => {
	const { error, isError, isLoading, filteredFruit } = useFruits()
	const groupBy = useAtomValue<GroupByType>(groupByAtom)
	const groupedFruits = useFruitsGrouping({ fruits: filteredFruit, groupBy })

	if (isError && error) return toast.error(error.message)

	if (groupBy === 'none') return <FruitView fruits={filteredFruit} isLoading={isLoading} />

	return (
		<Accordion type='multiple'>
			{Object.entries(groupedFruits ?? {}).map(([groupName, fruits], index) => (
				<AccordionItem value={`items-${index}`} key={`items-${index}`}>
					<AccordionTrigger>
						<div className='flex w-full justify-between'>
							<p>{groupName}</p>
							<div className='mr-4'>
								<AddAllToJar fruits={fruits} />
							</div>
						</div>
					</AccordionTrigger>
					<AccordionContent>
						<FruitView fruits={fruits} isLoading={isLoading} />
					</AccordionContent>
				</AccordionItem>
			))}
		</Accordion>
	)
}

export { FruitList }
