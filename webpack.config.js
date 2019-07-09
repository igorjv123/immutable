const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');


var config = {
    entry: {
        main: './src/main.js'
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

            {
                test: /\.(css|sass)$/,
                use: ['style-loader', 'css-loader', 'sass-loader']

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
            template: path.resolve(__dirname, 'src', 'old-index.html.pug'),
            filename: 'old-index.html.html'
        }),
        new CopyPlugin([
            { from: 'src/assets', to: 'assets' },
        ]),
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