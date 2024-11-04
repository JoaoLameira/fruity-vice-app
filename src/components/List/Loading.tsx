import { Skeleton } from '@/components/ui/skeleton'

const ListLoading: React.FC = () => {
	const array = new Array(12).fill(0)

	return (
		<div className='flex flex-col space-y-2'>
			{array.map((_, index) => {
				return <Skeleton key={index} className='h-14 w-full bg-gray-200' />
			})}
		</div>
	)
}

export { ListLoading }
