const EXCLUDE_FOLDERS = /node_modules/;

module.exports = [
    {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: EXCLUDE_FOLDERS
    }
];