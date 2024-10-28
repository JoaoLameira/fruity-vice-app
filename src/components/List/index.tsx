import { AddToJar } from '@/components/Buttons/AddToJar'
import { Fruit } from '@/types'
import { RemoveFromJar } from '@/components/Buttons/RemoveFromJar'
import React from 'react'

interface IListView {
	data: string[] | React.ReactNode[]
	fruits: Fruit[]
	addButton?: boolean
	removeButton?: boolean
}

const ListView: React.FC<IListView> = ({ data, fruits, addButton, removeButton }) => {
	return (
		<ul className='space-y-3'>
			{data.map((content, index) => (
				<li key={index} className='shadow'>
					<div className='flex items-center justify-between space-x-4 px-4 py-4'>
						<div className='w-full text-sm'>{content}</div>
						{addButton && <AddToJar fruit={fruits[index]} />}
						{removeButton && <RemoveFromJar fruit={fruits[index]} />}
					</div>
				</li>
			))}
		</ul>
	)
}

export { ListView }
