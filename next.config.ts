/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.sanity.io'], // یہاں Sanity کا hostname شامل کریں
  },
};

module.exports = nextConfig;
