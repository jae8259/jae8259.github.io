/** @type {import('next').NextConfig} */
const withRoutes = require("nextjs-routes/config")();
const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  distDir: "out",
};

module.exports = withRoutes(nextConfig);
