import { viewTypeAtom } from '@/atoms'
import { ViewType } from '@/types'
import { useAtom } from 'jotai'

export const useViewType = () => {
	const [viewType, setViewType] = useAtom<ViewType>(viewTypeAtom)

	const toggleViewType = () => {
		setViewType(prevType => (prevType === 'list' ? 'table' : 'list'))
	}

	return { viewType, toggleViewType }
}
