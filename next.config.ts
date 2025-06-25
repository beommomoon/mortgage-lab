// next.config.ts
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    domains: [
      /* … (기존) … */
    ],
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'mortgage-lab.co.kr' }],
        destination: 'https://www.mortgage-lab.co.kr/:path*',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
