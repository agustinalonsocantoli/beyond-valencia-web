/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'beyondvalencia.com',
            port: '',
          },
          {
            protocol: "https",
            hostname: "utfs.io",
            port: "",
          }
        ],
      },
}

module.exports = nextConfig
