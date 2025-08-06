import type { NextConfig } from "next";
import withPWA from "next-pwa";

// Configure next-pwa
const pwaConfig = withPWA({
  dest: "public", // Output directory for service worker files
  disable: process.env.NODE_ENV === "development", // Disable PWA in development mode
  register: true, // Automatically register the service worker
  skipWaiting: true, // Skip waiting for the service worker to take control
});

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ueilbcjjobjcaoqtfbrh.supabase.co",
        pathname: "/storage/v1/object/**",
      },
    ],
  },
};

export default pwaConfig(nextConfig);
