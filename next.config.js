/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'beyondvalencia.com',
            port: '',
          },
        ],
      },
}

module.exports = nextConfig
