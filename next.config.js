const withLess = require("next-with-less");

const nextConfig = withLess({
  lessLoaderOptions: {
    lessOptions: {
      modifyVars: {
        "primary-color": "#E5890A", // major border color
        "border-radius-base": "10px",
        "link-color": "#E5890A",
      },
    },
  },
  reactStrictMode: true,
  images: {
    domains: ["s3.ap-southeast-1.amazonaws.com"],
  },
});

module.exports = nextConfig;
