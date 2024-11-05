import { Fruit } from '@/types'
import { Button } from '@/components/ui/button'
import useJarFruits from '@/hooks/useJarFruits'

interface IRemoveFromJar {
	fruit: Fruit
}

const RemoveFromJar: React.FC<IRemoveFromJar> = ({ fruit }) => {
	const { removeFruitFromJar } = useJarFruits()

	return (
		<Button size='sm' onClick={() => removeFruitFromJar(fruit)}>
			<span className='text-xs'>Remove</span>
		</Button>
	)
}

export { RemoveFromJar }
