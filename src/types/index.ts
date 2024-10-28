export type ViewType = 'list' | 'table'

export type GroupByType = 'none' | 'family' | 'order' | 'genus' | 'name'

interface Nutrition {
	calories: number
	fat: number
	sugar: number
	carbohydrates: number
	protein: number
}

export interface Fruit {
	id: number
	name: string
	family: string
	order: string
	genus: string
	nutritions: Nutrition
}

export type IFruitGroup = Record<string, Fruit[]>
