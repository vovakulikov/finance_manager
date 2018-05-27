const merge = require('webpack-merge');
const path = require('path');
const common = require('./webpack/common-config');
const devServer = require('./webpack/config-parts/dev-server');
const extractCss = require('./webpack/loaders/mini-css-loader');
const miniCssPlugin = require('./webpack/plugins/mini-css-extract-plugin');
const babelLoader = require('./webpack/loaders/babel-loader');
const tsLoader = require('./webpack/loaders/ts-loader');
const compressionPlugin = require('./webpack/plugins/compression-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = merge.smart([
    common({
        entry: path.resolve(__dirname, './src/index.tsx'),
        output: path.resolve(__dirname, './build')
    }),
    extractCss(),
    miniCssPlugin({ isDevMode: false }),
    babelLoader(),
    tsLoader(),
    compressionPlugin(),
    { 
        mode: 'production',
        recordsPath: path.resolve(__dirname, './records.json'),
        plugins: [
            new CleanWebpackPlugin(['./build'])
        ]
    },
]);
