var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    entry: './js/main.js',
    output: {
        filename: 'bundle.js'
    },
    watch: true,
    devtool: '#source-map',
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
                    "css?sourceMap!sass?sourceMap")
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('style-extracted.css')
    ]
}