import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Fruit } from '@/types'
import { AddToJar } from '@/components/Buttons/AddToJar'

interface ITableView {
	data: Fruit[]
}

const TableView: React.FC<ITableView> = ({ data }) => {
	const tableHeads = ['Name', 'Family', 'Order', 'Genus', 'Calories']

	return (
		<Table>
			<TableHeader>
				<TableRow className='header'>
					{tableHeads.map((head, index) => (
						<TableHead key={index}>{head}</TableHead>
					))}
				</TableRow>
			</TableHeader>
			<TableBody>
				{data.map(fruit => {
					const { id, name, family, order, genus, nutritions } = fruit
					return (
						<TableRow key={id}>
							<TableCell>{name}</TableCell>
							<TableCell>{family}</TableCell>
							<TableCell>{order}</TableCell>
							<TableCell>{genus}</TableCell>
							<TableCell>{nutritions.calories}</TableCell>
							<TableCell>
								<AddToJar fruit={fruit} />
							</TableCell>
						</TableRow>
					)
				})}
			</TableBody>
		</Table>
	)
}

export { TableView }
