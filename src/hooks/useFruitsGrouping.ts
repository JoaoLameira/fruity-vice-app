import _groupby from 'lodash.groupby'
import { Fruit, GroupByType, IFruitGroup } from '@/types'

interface IFruitsGrouping {
	fruits: Fruit[] | undefined
	groupBy: GroupByType
}

export const useFruitsGrouping = ({ fruits, groupBy }: IFruitsGrouping): IFruitGroup => {
	if (!fruits) return

	if (groupBy === 'none') return { all: fruits }

	return _groupby(fruits, fruit => fruit[groupBy])
}
