const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCss = require('mini-css-extract-plugin')
const Copy = require('copy-webpack-plugin')
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const Dotenv = require('dotenv-webpack');

module.exports = {
    entry: './src/index.js', // el punto de entrada de mi aplicación
    output: { // Esta es la salida de mi bundle
        path: path.resolve(__dirname, 'dist'),
        // resolve lo que hace es darnos la ruta absoluta de el S.O hasta nuestro archivo
        // para no tener conflictos entre Linux, Windows, etc
        filename: 'main.js',
        // EL NOMBRE DEL ARCHIVO FINAL,
    },
    mode: 'production',
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
    optimization: {
        minimize: true,
        // minimizer: [
        //     new ImageMinimizerPlugin({
        //         minimizer: [
        //             {
        //                 implementation: ImageMinimizerPlugin.imageminMinify,
        //                 options: {
        //                     plugins: [
        //                         ["gifsicle", { interlaced: true }],
        //                         ["jpegtran", { progressive: true }],
        //                         ["optipng", { optimizationLevel: 5 }],
        //                         // Svgo configuration here https://github.com/svg/svgo#configuration
        //                         [
        //                             "svgo",
        //                             {
        //                                 name: 'preset-default',
        //                                 params: {
        //                                     overrides: {
        //                                         // customize plugin options
        //                                         convertShapeToPath: {
        //                                             convertArcs: true
        //                                         },
        //                                         // disable plugins
        //                                         convertPathData: false
        //                                     }
        //                                 }
        //                             }
        //                         ],
        //                     ],
        //                 },
        //             }
        //         ],
        //     }),
        // ],
    },
    // SECCION DE PLUGINS
    plugins: [
        new Dotenv(),
        new HtmlWebpackPlugin({ // CONFIGURACIÓN DEL PLUGIN
            inject: 'body', // INYECTA EL BUNDLE AL TEMPLATE HTML
            template: './public/index.html', // LA RUTA AL TEMPLATE HTML
            filename: './index.html' // NOMBRE FINAL DEL ARCHIVO
        }),
        new MiniCss(),
        // new Copy({
        //     patterns: [{
        //         from: path.resolve(__dirname, 'dist'),
        //         to:  path.resolve(__dirname, 'build')
        //     }]
        // })
    ]
}