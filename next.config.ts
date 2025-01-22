// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.sanity.io'], // Add the domain here
  },
  eslint: {
    ignoreDuringBuilds: true
},

};

module.exports = nextConfig;
