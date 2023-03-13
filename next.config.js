/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  images: {
    domains: ["landing.puntoscolombia.com"]
  }
}

module.exports = nextConfig
