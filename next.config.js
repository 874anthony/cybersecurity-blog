/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    largePageDataBytes: 128 * 3000,
  },
};

module.exports = nextConfig;
