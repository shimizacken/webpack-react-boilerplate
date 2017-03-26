let path = require('path');
let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let loaders = require('./webpack.loaders');

module.exports = {
    entry: './src/app.js',
    output: {
        publicPath: '/',
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
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.dev.html',
            files: {
                css: ['style.css'],
                js: ['bundle.js'],
            }
        })
    ],
    devServer: {
        contentBase: './public',
        hot: true,
        inline: true,
        noInfo: true,
        historyApiFallback: true,
        port: 8282
    }
};