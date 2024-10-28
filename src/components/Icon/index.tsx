import { icons, LucideProps } from 'lucide-react'

const Icon = ({ name, color, size }: LucideProps & { name: keyof typeof icons }) => {
	const LucideIcon = name ? icons[name] : null

	return LucideIcon ? <LucideIcon color={color} size={size} /> : null
}

export { Icon }
