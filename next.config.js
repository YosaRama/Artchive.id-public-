const withPlugins = require("next-compose-plugins");
const withLess = require("next-with-less");
const withPwa = require("next-pwa");

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["s3.ap-southeast-1.amazonaws.com"],
  },
  output: "standalone",
};

const config = withPlugins(
  [
    [
      withLess,
      {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              "primary-color": "#E5890A", // major border color
              "border-radius-base": "10px",
              "link-color": "#E5890A",
            },
          },
        },
      },
    ],
    [
      withPwa,
      {
        pwa: {
          dest: "public",
          register: true,
          skipWaiting: true,
          disable: process.env.NODE_ENV === "development",
        },
      },
    ],
  ],
  nextConfig
);

module.exports = config;
