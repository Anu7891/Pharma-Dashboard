/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Conditionally apply basePath and assetPrefix based on deployment environment
  basePath: process.env.VERCEL ? '' : '/Pharma-Dashboard',
  assetPrefix: process.env.VERCEL ? '' : '/Pharma-Dashboard/',
  images: { 
    unoptimized: true
  }
};

export default nextConfig;
