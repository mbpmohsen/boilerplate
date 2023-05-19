/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'kodoumo.ir',
                port: '',
                pathname: '/**',
            },
        ],
    },
}

module.exports = nextConfig
