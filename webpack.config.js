const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const webpack = require("webpack");
const path = require("path");
module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "./public/build"),
        filename: "./bundle.js",
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.sc|ass$/,
                use: [
                    {loader: MiniCssExtractPlugin.loader},
                    {loader: "css-loader"},
                    {loader: "sass-loader"}
                ]
            },
            {
                test: /\.(eot|ttf|woff|woff2)$/,
                loader: 'file-loader',
                options: {
                    name: 'fonts/[name].[hash].[ext]'
                }
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    publicPath: 'images/',
                    outputPath: 'images/',
                    esModule: false
                },
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),

        new CopyPlugin({
            patterns: [
                { from: "src/assets/images", to: "images" },
            ],
        }),
    ]
};