const ExtractTextPlugin = require("extract-text-webpack-plugin");
const EXCLUDE_FOLDERS = /node_modules/;

module.exports = [
    {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: EXCLUDE_FOLDERS
    },
    {
        rules: [
          {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({ // Extract text from a bundle, or bundles, into a separate file.
              fallback: "style-loader",
              use: "css-loader"
            })
          }
        ]
      }
    // {
    //     // Adds CSS to the DOM by injecting a <style> tag
    //     rules: [{
    //         test: /\.css$/,
    //         use: [
    //             { loader: "style-loader" },
    //             { loader: "css-loader" } // The css-loader interprets @import and url() like import/require() and will resolve them.
    //         ]
    //     }]
    // }
];