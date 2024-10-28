import { ViewSwitcher } from '@/components/FruitList/ViewSwitcher'
import { GroupBySelector } from '@/components/GroupBySelector'

const FruitNav: React.FC = () => {
	return (
		<div className='sticky top-10 pb-5'>
			<nav className='flex items-center space-x-4'>
				<ViewSwitcher />
				<GroupBySelector />
			</nav>
		</div>
	)
}

export { FruitNav }
