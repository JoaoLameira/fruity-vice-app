import { Fruit } from '@/types'

export const getFruits = async (): Promise<Fruit[] | undefined> => {
	const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
	const targetUrl = 'https://wcz3qr33kmjvzotdqt65efniv40kokon.lambda-url.us-east-2.on.aws'

	try {
		const response = await fetch(proxyUrl + targetUrl)

		if (!response.ok) throw new Error('Network response was not ok')

		if (response.status === 200) return response.json() as Promise<Fruit[]>

		return undefined
	} catch (error) {
		console.error('Error fetching data:', error)
		throw error
	}
}
