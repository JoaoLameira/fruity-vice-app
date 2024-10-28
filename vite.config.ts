import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vite.dev/config/
export default defineConfig(() => {
	/* const env = loadEnv(mode, process.cwd()) */
	return {
		plugins: [react()],
		//base: command == 'build' ? '/fruity-vice-app/' : '/',
		base: '/',
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
			},
			proxy: {
				'/api': {
					target: 'https://wcz3qr33kmjvzotdqt65efniv40kokon.lambda-url.us-east-2.on.aws',
					changeOrigin: true,
					rewrite: path => path.replace(/^\/api/, '')
				}
			}
		}
	}
})
