require("@babel/polyfill")
const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const autoprefixer = require('autoprefixer')
const globals = require('./webpack.globals')

const SpeedMeasurePlugin = require("speed-measure-webpack-plugin")
const smp = new SpeedMeasurePlugin()

module.exports = smp.wrap({
    entry: ["@babel/polyfill", `${globals.template}.js`],
    mode: 'development',
    output: {
        publicPath: globals.settings.assetPath,
    },
    resolve: {
        alias: {
            images: path.resolve(__dirname, globals.src.images),
        },
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
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
                test: /\.(png|jpe?g|gif|svg)$/i,
                loader: 'file-loader',
                options: {
                  name: 'images/[name].[ext]',
                },
            },
        ]
    },
})