import { Fruit } from '@/types'

export const getFruits = async (): Promise<Fruit[] | undefined> => {
	const url = '/api/'

	try {
		const response = await fetch(url)

		if (!response.ok) throw new Error('Network response was not ok')

		if (response.status === 200) return response.json() as Promise<Fruit[]>

		return undefined
	} catch (error) {
		console.error('Error fetching data:', error)
		throw error
	}
}
