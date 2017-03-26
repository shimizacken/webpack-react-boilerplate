let path = require('path');
let webpack = require('webpack');

module.exports = {
    entry: './src/app.js',
    output: {
        publicPath: "/assets/",
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    devServer: {
        port: 7272
    }
};