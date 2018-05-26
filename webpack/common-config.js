const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = ({ 
  entry = "./src/index.tsx",
  output = path.resolve(__dirname, '../build'),
  template = './src/index.pug'
} = {}) => ({
  // entry of project
  entry,
  output: {
      filename: '[name].[hash].js',
      path: output,
  },
  resolve: {
    extensions: ['.js', '.json', '.ts', '.tsx'],
    // alias for new @babel v7
    alias: {
        'babel-core': path.resolve(path.join(__dirname, '../node_modules/@babel/core')),
      },
  },
  module: {
      rules: [
          {
            test: /\.pug$/,
            use: [
                {
                    loader: 'pug-loader',
                    options: { pretty: true },
                },
            ],
          }
      ],
  },
  // after resolve https://github.com/asfktz/autodll-webpack-plugin/pull/106
  // this part of chunk vendor will be replaced by dll plugin  
  optimization: {
    splitChunks: {
        chunks: "all",
        minSize: 30000,
        minChunks: 1,
        maxAsyncRequests: 5,
        maxInitialRequests: 3,
        name: true,
        cacheGroups: {
            commons: {
                test: /[\\/]node_modules[\\/]/,
                name: "vendors",
                chunks: "all"
            }
        }
    },
    runtimeChunk: true,
  },
  plugins: [
      new HtmlWebpackPlugin({
          template,
          filename: 'index.html',
          inject: 'body',
      }),
      new webpack.NamedModulesPlugin(),

      new webpack.HashedModuleIdsPlugin(),
  ]
});