/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['bumblebee-dev-files.s3.amazonaws.com'],
    unoptimized: true,
  },
};

export default nextConfig;
