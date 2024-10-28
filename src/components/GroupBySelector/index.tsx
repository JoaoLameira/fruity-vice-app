import { groupByAtom } from '@/atoms'
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue
} from '@/components/ui/select'
import { GroupByType } from '@/types'
import { useAtom } from 'jotai'

const GroupBySelector: React.FC = () => {
	const [groupBy, setGroupBy] = useAtom<GroupByType>(groupByAtom)

	return (
		<Select value={groupBy} onValueChange={e => setGroupBy(e as GroupByType)}>
			<SelectTrigger className='w-[180px]'>
				<SelectValue />
			</SelectTrigger>
			<SelectContent>
				<SelectGroup>
					<SelectLabel>Group By</SelectLabel>
					<SelectItem value='none'>None</SelectItem>
					<SelectItem value='family'>Family</SelectItem>
					<SelectItem value='order'>Order</SelectItem>
					<SelectItem value='genus'>Genus</SelectItem>
				</SelectGroup>
			</SelectContent>
		</Select>
	)
}

export { GroupBySelector }
