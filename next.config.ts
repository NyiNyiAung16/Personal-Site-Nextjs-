import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: process.env.STRAPI_URL || 'localhost',
        port: '',
        pathname: '/uploads/**', // Restrict to uploads only
      },
      {
        protocol: 'https',
        hostname: 'creative-moonlight-f4d6057811.media.strapiapp.com',
        port: '',
        pathname: '/**', // Allow all paths for Unsplash
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337',
        pathname: '/uploads/**', // Restrict to uploads only
      },
    ],
  }
};

export default nextConfig;
