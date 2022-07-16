const path = require("path");

module.exports = {
  stories: [
    // "../stories/**/*.stories.mdx",
    // "../stories/**/*.stories.@(js|jsx|ts|tsx)",
    "../app/components/libs/**/*.stories.js",
    "../themes/components/libs/**/*.stories.js",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-scss",
  ],
  staticDirs: [{ from: "../public", to: "/" }],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
  },
  // webpackFinal: async (config, { configType }) => {
  //   config.module.rules.push({
  //     test: /\.scss$/,
  //     use: ["style-loader", "css-loader", "sass-loader"],
  //     include: path.resolve(__dirname, "../"),
  //   });

  //   // Return the altered config
  //   return config;
  // },
};
