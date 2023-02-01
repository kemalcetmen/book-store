/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['encrypted-tbn0.gstatic.com','s3-alpha-sig.figma.com','s3.piton.com.tr'],
  },
}

module.exports = nextConfig
