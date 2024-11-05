import { atom } from 'jotai'
import { GroupByType, ViewType, Fruit } from '@/types'
import { atomWithQuery } from 'jotai-tanstack-query'
import { getFruits } from '@/services/fruits'

export const jarAtom = atom<Fruit[]>([])
export const viewTypeAtom = atom<ViewType>('list')
export const groupByAtom = atom<GroupByType>('none')
export const fruitFilterAtom = atom<string | undefined>(undefined)

export const fruitsAtom = atomWithQuery<Fruit[] | undefined>(() => ({
	queryKey: ['fruits'],
	queryFn: getFruits
}))

export const filteredFruitsAtom = atom<Fruit[] | undefined>(get => {
	const { data: allFruit } = get(fruitsAtom)
	const filter = get(fruitFilterAtom)

	if (!allFruit) return undefined
	if (!filter) return allFruit

	return allFruit.filter(fruit => fruit.name.toLowerCase().includes(filter.toLowerCase()))
})
