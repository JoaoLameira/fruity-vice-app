import { Fruit } from '@/types'
import { Button } from '@/components/ui/button'
import useSelectedFruits from '@/hooks/useSelectedFruits'

interface IAddAllToJar {
	fruits: Fruit[]
}

const AddAllToJar: React.FC<IAddAllToJar> = ({ fruits }) => {
	const { addAllFruitToJar } = useSelectedFruits()
	const addAllToJar = (fruits: Fruit[]) => addAllFruitToJar(fruits)

	return (
		<Button variant='link' size='sm' onClick={() => addAllToJar(fruits)}>
			<span className='text-xs'>Add All</span>
		</Button>
	)
}

export { AddAllToJar }
