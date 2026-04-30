/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { unoptimized: true },
  distDir: 'dist',
  webpack: (config, { dev }) => {
    if (dev) {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
      };
    }
    return config;
  },
}

module.exports = nextConfig
