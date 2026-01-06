import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    domains: ["images.microcms-assets.io"],
  },
};

export default nextConfig;
