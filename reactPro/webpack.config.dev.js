const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCss = require('mini-css-extract-plugin')
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'main.js',
        publicPath: '/'
    },
    devServer: {
        historyApiFallback: true
    },
    mode: 'development',
    watch: true,
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            '@assets': path.resolve(__dirname, 'src/assets'),
            '@components': path.resolve(__dirname, 'src/components'),
            '@containers': path.resolve(__dirname, 'src/containers'),
            '@layouts': path.resolve(__dirname, 'src/layouts'),
            '@pages': path.resolve(__dirname, 'src/pages'),
            '@styles': path.resolve(__dirname, 'src/styles'),
            '@routes': path.resolve(__dirname, 'src/Routes'),
            '@hooks': path.resolve(__dirname, 'src/Hooks'),
            '@config': path.resolve(__dirname, 'src/config'),
            '@schemas': path.resolve(__dirname, 'src/schemas'),
            '@context': path.resolve(__dirname, 'src/context'),
            '@utils': path.resolve(__dirname, 'src/utils'),
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: 'body',
            template: './public/index.html',
            filename: './index.html'
        }),
        new MiniCss(),
        // new CopyPlugin({
        //     patterns: [
        //         {
        //             from: path.resolve(__dirname, "public", "favicon.ico"),
        //             to: "favicon.ico"
        //         },
        //     ],
        // })
    ],
    optimization: {
        minimize: false,
    },
    module: {
        rules: [
            {
                test: /\.m?js|jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                },
            },
            {
                test: /\.css|.scss|.sass$/i,
                use: [MiniCss.loader, 'css-loader', "sass-loader",]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/images/[name][ext]',
                },
            },
            {
                test: /\.(woff|woff2)$/,
                type: "asset/resource",
                generator: {
                    filename: "assets/fonts/[name][ext]"
                }
            }
        ]
    },
};