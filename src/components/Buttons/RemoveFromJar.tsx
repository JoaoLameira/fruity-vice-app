import { Fruit } from '@/types'
import { Button } from '@/components/ui/button'
import useSelectedFruits from '@/hooks/useSelectedFruits'

interface IRemoveFromJar {
	fruit: Fruit
}

const RemoveFromJar: React.FC<IRemoveFromJar> = ({ fruit }) => {
	const { removeFruitFromJar } = useSelectedFruits()
	const removeFromJar = (fruit: Fruit) => removeFruitFromJar(fruit)

	return (
		<Button size='sm' onClick={() => removeFromJar(fruit)}>
			<span className='text-xs'>Remove</span>
		</Button>
	)
}

export { RemoveFromJar }
