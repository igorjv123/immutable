const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
require("@babel/polyfill");
require("@babel/plugin-proposal-object-rest-spread")
const autoprefixer = require("autoprefixer");
const webpack = require("webpack");

var config = {
    entry: {
        main: ["@babel/polyfill", './src/main.js']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
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
                test: /\.(png|jpe?g|gif)$/,
                use: ['file-loader'],
            },
            // {
            //     test: /\.(css|sass)$/,
            //     use: ['style-loader', 'css-loader', 'sass-loader']
            //
            // },
            {
                test: /\.(css|sass)$/,
                exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.pug$/,
                use: ['pug-loader']
            },

        ]
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'index.pug'),
            filename: 'index.html'
        }),
        new CopyPlugin([
            { from: 'src/assets', to: 'assets' },
        ]),
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: [
                    autoprefixer()
                ]
            }
        }),
        // "@babel/plugin-proposal-object-rest-spread"
    ]
};
module.exports = (env, argv) => {
    if (argv.mode === 'development') {
        config.devtool = 'source-map';
        config.devServer = {
            contentBase: './src'
        }
    }
    if (argv.mode === 'production') {
        config.devServer = {
            contentBase: './dist'
        }
    }
    return config;
};