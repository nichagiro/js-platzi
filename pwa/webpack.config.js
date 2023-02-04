const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const WorkboxPlugin = require('workbox-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = function ({ production }) {
    return {
        mode: production ? 'production' : 'development',
        entry: './src/index.js',
        output: {
            clean: true,
            path: path.resolve(__dirname, './dist'),
            filename: 'main.js',
        },
        resolve: {
            extensions: ['.js', '.jsx', '.json'],
            alias: {
                "@css": path.resolve(__dirname, 'src/css/'),
                "@components": path.resolve(__dirname, 'src/components/'),
                "@pages": path.resolve(__dirname, 'src/pages/'),
                "@hooks": path.resolve(__dirname, 'src/hooks/'),
                "@functions": path.resolve(__dirname, 'src/functions/')
            }
        },
        optimization: {
            minimizer: [new CssMinimizerPlugin()],
        },
        module: {
            rules: [
                {
                    test: /\.css$/i,
                    use: [MiniCssExtractPlugin.loader, "css-loader"],
                },
                {
                    test: /\.(png|svg|jpg|jpeg|gif|webp|ico|svg)$/i,
                    type: 'asset/resource',
                },
                {
                    test: /\.(woff|woff2|eot|ttf|otf)$/i,
                    type: 'asset/resource',
                },
                {
                    test: /\.m?js|jsx$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }
                }
            ],
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, 'public/index.html'),
            }),
            new MiniCssExtractPlugin(),
            new CopyPlugin({
                patterns: [
                    { from: path.resolve(__dirname, 'public/images'), to: "images/" },
                ],
            }),
            new WebpackPwaManifest({
                filename: "manifest.json",
                publicPath: "/",
                display: "fullscreen",
                orientation: "portrait",
                display: "standalone",
                start_url: ".",
                inject: true,
                name: 'Progressive web app',
                short_name: 'PWA',
                description: 'Curso de PWA',
                background_color: '#ffffff',
                theme_color: '#912991',
                icons: [
                    {
                        src: path.resolve('public/images/icon.png'),
                        sizes: [96, 128, 192, 256, 384, 512],
                        destination: '/images/icons/'
                    },
                ]
            }),
            new WorkboxPlugin.GenerateSW({
                clientsClaim: true,
                skipWaiting: true,
                runtimeCaching: [
                    {
                        urlPattern: '/manifest.json',
                        handler: 'CacheFirst',
                        options: {
                            cacheName: 'config',
                            expiration: {
                                maxAgeSeconds: 60 * 60 * 24
                            }
                        }
                    },
                    {
                        urlPattern: new RegExp('images/icons'),
                        handler: 'CacheFirst',
                        options: {
                            cacheName: 'icons',
                            expiration: {
                                maxAgeSeconds: 60 * 60 * 24
                            }
                        }
                    }
                ]
            })
        ],
        devServer: {
            compress: true,
            historyApiFallback: true,
            port: 4000,
            hot: true,
            open: true,
        },
    }
};