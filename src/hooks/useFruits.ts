import { useAtom, useAtomValue } from 'jotai'
import { filteredFruitsAtom, fruitsAtom } from '@/atoms'

const useFruits = () => {
	const [{ data, isError, error, isLoading, isSuccess }] = useAtom(fruitsAtom)
	const filteredFruit = useAtomValue(filteredFruitsAtom)

	return { allFruit: data, filteredFruit, error, isError, isLoading, isSuccess }
}

export default useFruits
