const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
}

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    /** @type {import('next').NextConfig} */
    return {
      async rewrites() {
        return [
          {
            source: '/api/:path*',
            destination: 'http://127.0.0.1:8080/api/:path*', // Proxy to Backend
          },
        ]
      },
    }
  }

  return nextConfig
}
