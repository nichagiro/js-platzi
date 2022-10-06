const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCss = require('mini-css-extract-plugin')
const Dotenv = require('dotenv-webpack');
const Webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;


module.exports = {
    entry: './src/index.js', // el punto de entrada de mi aplicación
    output: { // Esta es la salida de mi bundle
        path: path.resolve(__dirname, 'build'),
        filename: 'main.js',
    },
    mode:'development',
    devtool: 'source-map',
    resolve: {
        extensions: ['.js'], // LOS ARCHIVOS QUE WEBPACK VA A LEER
        alias:{
            '@images' : path.resolve(__dirname, 'src/assets/images')
        }
    },
    module: {
        // REGLAS PARA TRABAJAR CON WEBPACK
        rules: [
            {
                test: /\.m?js|jsx$/, // LEE LOS ARCHIVOS CON EXTENSION .JS,
                exclude: /node_modules/, // IGNORA LOS MODULOS DE LA CARPETA
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css|.scss|.sass$/i, // LEE LOS ARCHIVOS CON EXTENSION .CSS,
                use: [MiniCss.loader, 'css-loader', "sass-loader",]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i, // variables images en el import
                type: 'asset/resource',
                generator: {
                    filename: 'assets/images/[name][ext]',
                },
            },
            {
                test: /\.(woff|woff2)$/, // optimizar fuentes
                type: "asset/resource",
                generator: {
                    filename: "assets/fonts/[name][ext]"
                }
            }
        ]
    },
    // SECCION DE PLUGINS
    plugins: [
        new BundleAnalyzerPlugin(),
        new Dotenv(),
        new HtmlWebpackPlugin({ // CONFIGURACIÓN DEL PLUGIN
            inject: 'body', // INYECTA EL BUNDLE AL TEMPLATE HTML
            template: './public/index.html', // LA RUTA AL TEMPLATE HTML
            filename: './index.html' // NOMBRE FINAL DEL ARCHIVO
        }),
        new MiniCss(),
    ]
}