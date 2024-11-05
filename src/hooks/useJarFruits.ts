import { useAtom } from 'jotai'
import { jarAtom } from '@/atoms'
import { Fruit } from '@/types'
import { toast } from 'sonner'

const useJarFruits = () => {
	const [selectedFruits, setSelectedFruits] = useAtom<Fruit[]>(jarAtom)

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

	const addAllFruitToJar = (fruits: Fruit[]) => {
		setSelectedFruits(prevSelected => [...prevSelected, ...fruits])
		toast.success('All fruit group was added successfully!')
	}

	const selectedFruitsCount = selectedFruits.length

	return {
		selectedFruits,
		addFruitToJar,
		selectedFruitsCount,
		removeFruitFromJar,
		addAllFruitToJar
	}
}

export default useJarFruits
