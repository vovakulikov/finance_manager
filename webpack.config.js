
const devConfig = require('./webpack.dev');
const prodConfig = require('./webpack.prod');

module.exports = (env) => {
    switch (env) {
        case 'development': return devConfig;
        case 'production': return prodConfig;
        default: return devConfig;
    }
};