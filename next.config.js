/** @type {import('next').NextConfig} */
const withNextIntl = require("next-intl/plugin")("./src/i18n.js");

const nextConfig = {
  reactStrictMode: false,
  sassOptions: {
    silenceDeprecations: ["legacy-js-api"],
  },
};

module.exports = withNextIntl(nextConfig);
