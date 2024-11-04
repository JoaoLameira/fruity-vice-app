import React from 'react'
import { useFruits } from '@/hooks/useFruits'
import { FruitGroup } from '@/components/Fruit/FruitGroup'
import { toast } from 'sonner'
import { FruitNav } from '@/components/Fruit/FruitNav'
import { ListLoading } from '../List/Loading'

const FruitList: React.FC = () => {
	const [{ data: fruits, isLoading, isError, error }] = useFruits()

	if (isError) return toast.error(error.message)

	if (!fruits && !isLoading) return toast.error('No Fruits!')

	return (
		<div>
			<FruitNav />
			{isLoading && <ListLoading />}

			{fruits && <FruitGroup fruits={fruits} />}
		</div>
	)
}

export { FruitList }
