/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      unoptimized: true, // important pt. Vercel și imagini locale
    },
  };
  
  module.exports = nextConfig;
  