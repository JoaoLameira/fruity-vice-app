import React from 'react'
import { FruitList } from '@/components/FruitList'
import { FruitJar } from '@/components/FruitJar'
import { FruitNav } from '@/components/FruitList/Nav'

const Layout: React.FC = () => {
	return (
		<main className='min-h-screen px-10 py-10'>
			<div className='flex gap-20'>
				<section className='flex-1'>
					<FruitNav />
					<FruitList />
				</section>
				<section className='flex-auto'>
					<FruitJar />
				</section>
			</div>
		</main>
	)
}

export { Layout }
