import nextTranslate from 'next-translate-plugin';
import "./src/env.mjs";

/** @type {import("next").NextConfig} */

const config = {
  experimental: { serverActions: true },

};

export default nextTranslate(config);
