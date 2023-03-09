const path = require('path')
const { merge } = require('webpack-merge')
const common = require('./webpack.common..js')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const TerserPlugin = require("terser-webpack-plugin")
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyPlugin = require("copy-webpack-plugin")
const globals = require('./webpack.globals')

module.exports = merge(common, {
    output: {
        path: path.resolve(__dirname, `${globals.test}`),
        filename: `${globals.files.test}.bundle.js`
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: `test`,
            template: path.resolve(__dirname, `${globals.template}.html`),
            filename: globals.files.html,
            inject: 'body'
        }),
        new MiniCssExtractPlugin({
            filename: `${globals.files.test}.css`,
        }),
    ],
    optimization: {
        minimize: false,
        usedExports: true,
        sideEffects: true,
    },
    devtool: 'source-map',
})