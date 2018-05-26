
const devConfig = require('./webpack.config.dev');
const prodConfig = require('./webpack.config.prod');

module.exports = (env) => {
    switch (env) {
        case 'development': return devConfig;
        case 'production': return prodConfig;
        default: return devConfig;
    }
};