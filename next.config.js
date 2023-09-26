/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    serverActions: true,
    optimizeCss: true, // enabling this will enable SSR for Tailwind
  },
};

module.exports = nextConfig;
