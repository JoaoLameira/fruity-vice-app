import { ViewSwitcher } from '@/components/Buttons/ViewSwitcher'
import { GroupBySelector } from '@/components/GroupBy'
import Search from '@/components/Search'

const FruitNav: React.FC = () => {
	return (
		<div className='sticky top-10 z-10 pb-5'>
			<nav className='flex items-center space-x-4'>
				<ViewSwitcher />
				<GroupBySelector />
				<Search />
			</nav>
		</div>
	)
}

export { FruitNav }
