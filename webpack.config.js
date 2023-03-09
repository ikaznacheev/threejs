require("@babel/polyfill")

const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const autoprefixer = require('autoprefixer')
const TerserPlugin = require("terser-webpack-plugin")
const globals = require('./webpack.globals')


module.exports = {
    entry: ["@babel/polyfill", `${globals.template}.js`],
    output: {
        publicPath: globals.settings.assetPath,
    },
    // resolve: {
    //     alias: {
    //         images: path.resolve(__dirname, globals.src.images),
    //     },
    // },
    mode: 'development',
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        // allowedHosts: [
        //     'https://ikaznacheev.com',
        // ],
        historyApiFallback: true,
        // contentBase: path.resolve(__dirname, 'public'),
        open: true,
        compress: true,
        hot: true,
        port: 8080,
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: `Тест`,
            template: path.resolve(__dirname, `${globals.template}.html`),
            filename: globals.files.html,
            inject: 'body'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin({
            filename: `${globals.files.test}.css`,
        }),
        // new CleanWebpackPlugin(),
        new webpack.SourceMapDevToolPlugin({}),
        new webpack.DefinePlugin({
            'process.env.ASSET_PATH': JSON.stringify(globals.settings.assetPath),
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                  "css-loader",
                  {
                    loader: "postcss-loader",
                    options: {
                        postcssOptions: {
                            plugins: [
                                ["postcss-preset-env"],
                                autoprefixer({
                                    overrideBrowserslist:  ['last 2 versions'],
                                    cascade: false
                                }),
                            ],
                            sourceMap: true,
                        },
                    },
                  },
                ],
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            [
                                "@babel/preset-env",
                                {
                                    "targets": {
                                      "chrome": "58",
                                      "ie": "11"
                                    }
                                }
                            ]
                        ],
                        plugins: ['@babel/plugin-proposal-object-rest-spread'],
                        plugins: ['@babel/plugin-transform-arrow-functions'],
                        plugins: ['@babel/plugin-proposal-object-rest-spread'],
                    }
                }
            },
            {
                test: /\.(png|jpe?g|gif|svg|fbx)$/i,
                loader: 'file-loader',
                options: {
                  name: 'images/[name].[ext]',
                },
            },
            {
                test: /\.(jpe?g|gif|png|svg|woff|ttf|wav|fbx)$/,
                type: "asset/resource"
            }
        ]
    }
}