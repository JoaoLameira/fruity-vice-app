import { Fruit } from '@/types'
import { Button } from '@/components/ui/button'
import useJarFruits from '@/hooks/useJarFruits'

interface IAddAllToJar {
	fruits: Fruit[]
}

const AddAllToJar: React.FC<IAddAllToJar> = ({ fruits }) => {
	const { addAllFruitToJar } = useJarFruits()

	return (
		<Button asChild variant='link' size='sm' onClick={() => addAllFruitToJar(fruits)}>
			<span className='text-xs'>Add All</span>
		</Button>
	)
}

export { AddAllToJar }
