/** @type {import('next').NextConfig} */
const withNextIntl = require("next-intl/plugin")("./src/i18n.js");

const nextConfig = {
  reactStrictMode: false,
  sassOptions: {
    silenceDeprecations: ["legacy-js-api"],
  },
  images: {
    domains: ["91.98.36.223"], // Add your hostname here
  },
};

module.exports = withNextIntl(nextConfig);
