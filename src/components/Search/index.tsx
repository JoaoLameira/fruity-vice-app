import { fruitFilterAtom } from '@/atoms'
import { Input } from '@/components/ui/input'
import { useAtom } from 'jotai'

const Search = () => {
	const [, setFruitFilter] = useAtom(fruitFilterAtom)
	return <Input onChange={e => setFruitFilter(e.target.value)} placeholder='Search' />
}

export default Search
