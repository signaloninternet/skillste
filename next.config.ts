import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // matches any domain
        port: "",
        pathname: "/**", // matches any path
      },
      {
        protocol: "http",
        hostname: "**", // allow non-https too (optional)
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
