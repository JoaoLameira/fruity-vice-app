import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd())
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
					target: env.VITE_API_URL,
					changeOrigin: true,
					secure: false,
					rewrite: path => path.replace(/^\/api/, '')
				}
			}
		}
	}
})
