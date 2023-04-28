/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ['media.graphassets.com'],
	},
	env: {
		HYGRAPH_API_KEY: process.env.HYGRAPH_API_KEY,
	},
}

module.exports = nextConfig
