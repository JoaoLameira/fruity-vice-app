import { Fruit } from '@/types'
import { Button } from '@/components/ui/button'
import useSelectedFruits from '@/hooks/useSelectedFruits'

interface IAddToJar {
	fruit: Fruit
}

const AddToJar: React.FC<IAddToJar> = ({ fruit }) => {
	const { addFruitToJar } = useSelectedFruits()
	const addToJar = (fruit: Fruit) => addFruitToJar(fruit)

	return (
		<Button size='sm' onClick={() => addToJar(fruit)}>
			<span className='text-xs'>Add</span>
		</Button>
	)
}

export { AddToJar }
