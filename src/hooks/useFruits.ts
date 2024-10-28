import { useAtom } from 'jotai'
import { atomWithQuery } from 'jotai-tanstack-query'
import { getFruits } from '@/services/fruits'
import { Fruit } from '@/types'

const fruitsAtom = atomWithQuery<Fruit[] | undefined>(() => ({
	queryKey: ['fruits'],
	queryFn: () => getFruits()
}))

export const useFruits = () => useAtom(fruitsAtom)
