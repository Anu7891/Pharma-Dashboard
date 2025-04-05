/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/Pharma-Dashboard',
  assetPrefix: '/Pharma-Dashboard/',
  images: { 
    unoptimized: true,
    domains: ['localhost']
  }
};

export default nextConfig;
