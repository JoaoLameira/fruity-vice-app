import { atom } from 'jotai'
import { GroupByType, ViewType, Fruit, FruitFamilyColor } from '@/types'

export const selectedFruitsAtom = atom<Fruit[]>([])
export const viewTypeAtom = atom<ViewType>('list')
export const groupByAtom = atom<GroupByType>('none')
export const familyColorAtom = atom<FruitFamilyColor>({})
