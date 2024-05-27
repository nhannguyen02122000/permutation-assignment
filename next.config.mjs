/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  env: {
    ENV_ARG: process.env.NODE_ENV || 'development',
    API_KEY: '?'
  },
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**'
      }
    ]
  }
}

export default nextConfig
