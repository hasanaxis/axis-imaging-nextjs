/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Add formats for better compression
    formats: ['image/webp', 'image/avif'],
    // If using external images, configure domains
    // domains: ['your-domain.com'],
  },
}

export default nextConfig