const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const autoprefixer = require('autoprefixer');
const extractPlugin = new ExtractTextPlugin({
        filename: 'main.css'
    });

var DIST_DIR = path.resolve(__dirname, "client/dist");
var SRC_DIR = path.resolve(__dirname, "client/src");

module.exports = {
    entry: [
        'webpack-hot-middleware/client?reload=true',
        SRC_DIR + '/js/index.js',
    ],
    output: {
        path: DIST_DIR,
        filename: 'bundle.js',
        publicPath: "/client"
    },
    devServer: {
        hot: true,
        inline: true,
        port: 8080,
        historyApiFallback: true
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['es2015', 'react']
                        },
                    }
                ]
            },
            {
                test: /\.(scss|css)$/,
                use: extractPlugin.extract({
                    use: ['css-loader', 'sass-loader', 'postcss-loader']
                })
            },
            {
                test: /\.html$/,
                use: ['html-loader']
            },
            {
                test: /\.(jpg|png|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'img/',
                            // publicPath: 'img/'
                        }
                    }
                ]
            },
            {
                test: /\.(eot|woff|woff2|ttf|svg)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'fonts/[name].[ext]'
                        }
                    }
                ]
            },
        ]
    },
    plugins: [
        extractPlugin,
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: [autoprefixer]
            }
        }),
        new HtmlWebpackPlugin({
            template: 'client/src/index.html'
        }),
        new CleanWebpackPlugin(['dist']),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ]
};
