import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  watchOptions: {
    poll: 1000, // Check for changes every 1 second
    aggregateTimeout: 300,
  },
};

export default nextConfig;
