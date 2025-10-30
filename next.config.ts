import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      "images-cdn3.welcomesoftware.com", // Yahoo Finance
      "www.techi.com",                   // Techi Blog
      "encrypted-tbn0.gstatic.com",      // Google (thumbnails)
    ],
  },
};

export default nextConfig;
