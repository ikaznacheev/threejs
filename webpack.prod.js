const path = require('path')
const { merge } = require('webpack-merge')
const common = require('./webpack.common..js')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const TerserPlugin = require("terser-webpack-plugin")
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const globals = require('./webpack.globals') 

module.exports = merge(common, {
    output: {
        path: path.resolve(__dirname, `${globals.prod}`),
        filename: `${globals.prodFile}.bundle.js`,
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: `${globals.prodFile}.css`,
        }),
    ],
    optimization: {
        minimize: true,
        minimizer: [
            new CssMinimizerPlugin(),
            new TerserPlugin({
                test: /\.js(\?.*)?$/i,
                terserOptions: {
                    compress: {
                        drop_console: true,
                    },
                },
            })
        ],
        usedExports: true,
        sideEffects: true,
    }
})