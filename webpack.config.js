const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


var config = {
    entry: {
        index: './scripts/index.js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)?$/,
                use: 'babel-loader'
            },
            {
                test: /\.(css|sass)?$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader']
            },
        ]
    },
    output: {
        filename: "bundle.[hash].js",
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        hot: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname ,'index.html')
        }),
        new CopyPlugin([
            { from: 'img', to: 'img' },
            { from: 'css', to: 'css' }
        ]),
        // new ExtractTextPlugin({filename: 'style.css'})
    ]
};

module.exports = (env, argv) => {
    config.mode = argv.mode;
    if (argv.mode === 'development') {
        config.devtool = 'source-map';
    }
    return config;
};