import { Button } from '@/components/ui/button'
import { useViewType } from '@/hooks/useViewtype'
import { Icon } from '@/components/Icon'

const ViewSwitcher: React.FC = () => {
	const { viewType, toggleViewType } = useViewType()

	return (
		<Button size='icon' onClick={toggleViewType}>
			{viewType === 'list' ? <Icon name='List' /> : <Icon name='Table' />}
		</Button>
	)
}

export { ViewSwitcher }
