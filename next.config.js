/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['api.mercadolibre.com', 'http2.mlstatic.com'],
    deviceSizes: [768, 992, 1200],
  },
};

module.exports = nextConfig;
