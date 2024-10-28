import React from 'react'
import { useFruits } from '@/hooks/useFruits'
import { FruitGroup } from '@/components/FruitGroup'
import { Skeleton } from '@/components/ui/skeleton'

const FruitList: React.FC = () => {
	const [{ data: fruits, isLoading, isError, error }] = useFruits()

	if (isLoading) {
		return (
			<>
				<div className='flex flex-col space-y-2'>
					<Skeleton className='h-14 w-full bg-gray-200' />
					<Skeleton className='h-14 w-full bg-gray-200' />
					<Skeleton className='h-14 w-full bg-gray-200' />
					<Skeleton className='h-14 w-full bg-gray-200' />
					<Skeleton className='h-14 w-full bg-gray-200' />
					<Skeleton className='h-14 w-full bg-gray-200' />
					<Skeleton className='h-14 w-full bg-gray-200' />
					<Skeleton className='h-14 w-full bg-gray-200' />
					<Skeleton className='h-14 w-full bg-gray-200' />
				</div>
			</>
		)
	}

	if (isError) return <p>{error.message}</p>

	if (!fruits)
		return (
			<div className='flex'>
				<p className='text-center'>No fruits!</p>
			</div>
		)

	return (
		<div>
			<FruitGroup fruits={fruits} />
		</div>
	)
}

export { FruitList }
