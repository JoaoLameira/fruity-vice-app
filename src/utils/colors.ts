export const generateGrayShades = (count: number): string[] => {
	const startLightness = 10
	const endLightness = 90
	const shades = []

	for (let i = 0; i < count; i++) {
		const lightness = startLightness + ((endLightness - startLightness) * i) / (count - 1)
		shades.push(`hsl(0, 0%, ${lightness}%)`)
	}

	return shades
}
