const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const miniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: './src/js/index.js',
    mode: 'production',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js'
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [miniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            },
        ],
    },
    plugins: [
        new htmlWebpackPlugin({ template: './src/index.html' }),
        new miniCssExtractPlugin({
            filename: 'index.css'
        })
    ],
    devtool: 'source-map' 
}