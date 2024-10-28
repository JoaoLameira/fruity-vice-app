import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vite.dev/config/
export default defineConfig(() => {
	return {
		plugins: [react()],
		base: '/fruity-vice-app/',
		resolve: {
			alias: {
				'@': path.resolve(__dirname, './src')
			}
		},
		server: {
			port: 3000,
			host: true,
			watch: {
				usePolling: true
			}
		}
	}
})
