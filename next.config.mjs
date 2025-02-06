/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'image.tmdb.org',
                port: '',
                pathname: '/t/p/**',
            }
        ]
    },
    webpack(config) {
        config.devtool = 'source-map';
        return config;
    },
};

export default nextConfig;

