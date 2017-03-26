let path = require('path');
let webpack = require('webpack');
let loaders = require('./webpack.loaders');

module.exports = {
    entry: './src/app.js',
    output: {
        publicPath: "/assets/",
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.webpack.js', '.web.js'],
        modules: ['node_modules']
    },
    module: {
        rules: loaders
    },
    devServer: {
        port: 8282
    }
};