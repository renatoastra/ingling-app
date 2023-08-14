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
    domains: ['**', "*", "static.wikia.nocookie.net"]
  },
};


export default  config;
