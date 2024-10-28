import { Fruit } from '@/types'

export const getFruits = async (): Promise<Fruit[] | undefined> => {
	try {
		const response = await fetch('/api', {
			headers: {
				Accept: 'application/json, text/plain',
				'Content-Type': 'application/json',
				'Accept-Language': 'en'
			},
			mode: 'no-cors'
		})

		if (!response.ok) throw new Error('Network response was not ok')

		if (response.status === 200) return response.json() as Promise<Fruit[]>

		return undefined
	} catch (error) {
		console.error('Error fetching data:', error)
		throw error
	}
}
