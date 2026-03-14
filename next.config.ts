import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  output: 'export',  // static export for Vercel
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
