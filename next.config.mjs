import "./src/env.mjs";

/** @type {import("next").NextConfig} */

const config = {
  experimental: { serverActions: true },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "**",
      },
      {
        protocol: "https",
        hostname: "**",
      }

    ],
    domains: ['**', "*"]
  },
};


export default  config;
