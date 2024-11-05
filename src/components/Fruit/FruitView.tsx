import { useMemo } from 'react'
import { AddToJar } from '@/components/Buttons/AddToJar'
import { useViewType } from '@/hooks/useViewtype'
import { TableView } from '@/components/Table'
import { ListView } from '@/components/List'
import { Fruit } from '@/types'

interface IFruitView {
	fruits: Fruit[] | undefined
	isLoading?: boolean
}

const FruitView = ({ fruits, isLoading }: IFruitView) => {
	const { viewType } = useViewType()
	const dataForListView = useMemo(
		() =>
			fruits?.map(fruit => (
				<>
					<p>
						{fruit.name} ({fruit.nutritions.calories} kcal)
					</p>
					<AddToJar fruit={fruit} />
				</>
			)),
		[fruits]
	)

	if (viewType === 'list') return <ListView data={dataForListView} isLoading={isLoading} />

	return <TableView data={fruits} />
}

export { FruitView }
