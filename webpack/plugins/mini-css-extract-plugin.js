const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = ({ isDevMode }) => {
    return {
        plugins: [
            new MiniCssExtractPlugin({
              // Options similar to the same options in webpackOptions.output
              // both options are optional
              filename: '[name].[hash].css',
              chunkFilename: '[id].[hash].css',
            })
          ]
    }
};