import { useAtom } from 'jotai'
import { selectedFruitsAtom } from '@/atoms'
import { Fruit } from '@/types'
import { toast } from 'sonner'

const useSelectedFruits = () => {
	const [selectedFruits, setSelectedFruits] = useAtom<Fruit[]>(selectedFruitsAtom)

	const addFruitToJar = (fruit: Fruit) => {
		if (selectedFruits.includes(fruit)) toast.info('Fruit is already in the jar!')

		setSelectedFruits(prevSelected => [...prevSelected, fruit])

		toast.success('Fruit added successfully!')
	}

	const removeFruitFromJar = (fruit: Fruit) => {
		const index = selectedFruits.findIndex(item => item === fruit)

		if (index === -1) {
			toast.info('Fruit is not in the jar!')
			return
		}

		setSelectedFruits(prevSelected => [...prevSelected.slice(0, index), ...prevSelected.slice(index + 1)])

		toast.success('Fruit removed successfully!')
	}

	const selectedFruitsCount = selectedFruits.length

	return {
		selectedFruits,
		addFruitToJar,
		selectedFruitsCount,
		removeFruitFromJar
	}
}

export default useSelectedFruits
