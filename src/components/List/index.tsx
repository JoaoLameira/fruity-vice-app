import React from 'react'
import { ListLoading } from '@/components/List/Loading'

interface IListView {
	data: string[] | React.ReactNode[] | undefined
	isLoading?: boolean
}

const ListView: React.FC<IListView> = ({ data, isLoading }) => {
	if (isLoading) return <ListLoading />

	if (!data || data.length === 0) return <p className='text-center'>No items!</p>

	return (
		<ul className='space-y-3'>
			{data.map((content, index) => (
				<li key={index} className='text-sm shadow'>
					<div className='flex w-full items-center justify-between space-x-4 px-4 py-4'>{content}</div>
				</li>
			))}
		</ul>
	)
}

export { ListView }
