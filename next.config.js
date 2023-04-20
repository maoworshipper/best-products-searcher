/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [process.env.NEXT_PUBLIC_IMAGES_URL],
    deviceSizes: [768, 992, 1200],
  },
};

module.exports = nextConfig;
