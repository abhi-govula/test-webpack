var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    entry: './js/main.js',
    output: {
        filename: 'bundle.js'
    },
    watch: true,
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract(
                    "style",
                    "css!sass")
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('style-extracted.css')
    ]
}