import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export', // static export for GitHub Pages
  images: { unoptimized: true },
  basePath: isProd ? '' : '',
  assetPrefix: isProd ? '' : '',
  trailingSlash: true,
  distDir: 'out',
};

export default nextConfig;
