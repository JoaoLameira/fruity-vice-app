import { Fruit } from '@/types'
import { Button } from '@/components/ui/button'
import useJarFruits from '@/hooks/useJarFruits'

interface IAddToJar {
	fruit: Fruit
}

const AddToJar: React.FC<IAddToJar> = ({ fruit }) => {
	const { addFruitToJar } = useJarFruits()

	return (
		<Button size='sm' onClick={() => addFruitToJar(fruit)}>
			<span className='text-xs'>Add</span>
		</Button>
	)
}

export { AddToJar }
