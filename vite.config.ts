import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd())
	return {
		plugins: [react()],
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
			/* headers: {
				'Access-Control-Allow-Origin': '*',
				'Content-Type': 'application/javascript'
			}, */
			proxy: {
				'/api': {
					target: env.VITE_API_URL,
					changeOrigin: true,
					rewrite: path => path.replace(/^\/api/, '')
				}
			}
		}
	}
})
