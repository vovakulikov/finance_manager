const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const WebpackChunkHash = require('webpack-chunk-hash');

module.exports = ({ 
  entry = "./src/index.tsx",
  output = path.resolve(__dirname, '../build'),
  template = './src/index.pug'
} = {}) => ({
  // entry of project
  entry: {
      app: [entry],
  },
  output: {
    filename: "[name].[hash].js",
    chunkFilename: "[name].[chunkhash].js",
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
    namedModules: true,
    splitChunks: {
        chunks: "all",
        minSize: 30000,
        minChunks: 1,
        maxAsyncRequests: 5,
        maxInitialRequests: 3,
        name: true,
        cacheGroups: {
            commons: {
                chunks: "all",
                minChunks: 2,
                maxInitialRequests: 5, // The default limit is too small to showcase the effect
                minSize: 0 // This is example is too small to create commons chunks
            },
            vendors: {
                test: /[\\/]node_modules[\\/]/,
                chunks: "all",
                name: "vendors",
            }
        }
    },
    runtimeChunk: 'single',
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