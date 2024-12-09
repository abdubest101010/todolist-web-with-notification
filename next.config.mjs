/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true, // Enable the App Directory for the App Router
  },
  reactStrictMode: true, // Optional, but a good practice for development
};

export default nextConfig;
