const CompressionPlugin = require("compression-webpack-plugin")

module.exports = () => {
  return {
    plugins: [
      new CompressionPlugin({
        algorithm: 'gzip'
      })
    ]
  };
}