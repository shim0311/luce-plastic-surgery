const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: path.resolve(__dirname),
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.wannaps.co.kr',
        pathname: '/**',
      },
    ],
  },
}
module.exports = nextConfig
