const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = () => {
  return {
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, "css-loader"]
        }
      ]
    }
  }
}
