import React from 'react'
import { FruitList } from '@/components/Fruit/FruitList'
import { FruitJar } from '@/components/Fruit/FruitJar'
import { FruitNav } from '@/components/Fruit/FruitNav'

const Layout: React.FC = () => {
	return (
		<main className='min-screen p-3 lg:p-10'>
			<div className='flex flex-col-reverse gap-y-10 lg:flex-row lg:gap-20'>
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
