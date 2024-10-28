import { createProxyMiddleware } from 'http-proxy-middleware'

const target = process.env.VITE_API_URL
const proxy = createProxyMiddleware({
	target,
	changeOrigin: true,
	pathRewrite: {
		'^/api': ''
	}
})

export default function handler(req, res) {
	proxy(req, res, err => {
		if (err) {
			res.status(500).json({ error: 'Proxy error', details: err.message })
		}
	})
}

export const config = {
	api: {
		bodyParser: false
	}
}
