const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCssPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './develop/scripts/index.js',
    output: {
        path: path.resolve(__dirname, 'docs'),
        filename: '[name].[chunkhash].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader'
                ]
            },
            {
                enforce: 'pre',
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'eslint-loader',
                options: {
                    fix: true
                }
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(jpe?g|gif|png|svg|woff2|ttf|eot)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[contenthash].[ext]',
                            outputPath: 'img'
                        }
                    }
                ]
            },
            {
                test: /\.html$/,
                use: [
                    'html-loader'
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[chunkhash].css'
        }),
        new HtmlWebpackPlugin({
            template: './develop/index.html',
            filename: 'index.html',
            inject: 'body',
            minify: {
                //htmlのファイルを圧縮するための記述
                collapseWhitespace: true, //空白を取り除く
                keepClosingSlash: true, //コメントを取り除く
                removeComments: true, //不要なアトリビュートを取り除く
                removeRedundantAttributes: true, //などなど
                removeScriptTypeAttributes: true, //などなど
                removeStyleLinkTypeAttributes: true, //などなど
                useShortDoctype: true //などなど
            }
        }),
    ],
    optimization: {
        minimizer: [
            new TerserPlugin(), //javascriptのミニファイ
            new OptimizeCssPlugin() //cssのミニファイ
        ]
    }
};