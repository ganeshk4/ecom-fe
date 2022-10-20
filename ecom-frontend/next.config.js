/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    BACKEND_URL: process.env.BACKEND_URL,
    API_SECRET: process.env.API_SECRET,
  }
}

module.exports = nextConfig
