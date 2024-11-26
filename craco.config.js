// module.exports = {
//     webpack: {
//       // Add custom Webpack configurations here if needed
//     },
//     plugins: [
//       // Example: Add CRACO plugins here
//     ],
//   };
  


const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      if (process.env.NODE_ENV === "production") {
        webpackConfig.optimization = {
          ...webpackConfig.optimization,
          minimize: true,
          minimizer: [
            new TerserPlugin({
              terserOptions: {
                compress: {
                  drop_console: true, // Remove console logs
                },
                output: {
                  comments: false, // Remove comments
                },
              },
            }),
          ],
        };
      }
      return webpackConfig;
    },
  },
};
