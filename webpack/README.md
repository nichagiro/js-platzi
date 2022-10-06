# Comandos

_Webpack_
<npm install webpack webpack-cli -D>

_Webpack RUN_
<npx webpack --mode production>

_Webpack RUN configuration_
<npx webpack --mode production --config webpack.config.js>

_Babel_
<npm install babel-loader @babel/core @babel/preset-env @babel/plugin-transform-runtime -D/>

_babel-loader_ nos permite usar babel con webpack
_@babel/core_ es babel en general
_@babel/preset-react_ es babel para react
_@babel/preset-env_ trae y te permite usar las ultimas características de JavaScript
_@babel/plugin-transform-runtime_ te permite trabajar con todo el tema de asincronismo como ser async y await
_Debes crear el archivo de configuración de babel el cual tiene como nombre .babelrc_

_HTML en webpack_
<npm i html-webpack-plugin -D>

_Loader CSS_ con SASS (Opcional)
<npm i mini-css-extract-plugin css-loader -D>
<npm install sass-loader sass webpack --save-dev>

_Copiar archivos_ 
<npm i copy-webpack-plugin -D>

_ENV_
<npm install -D dotenv-webpack>

_Analizador_
<npm install -D webpack-bundle-analyzer>

**npx webpack --profile --json | Out-file 'stats.json' -Encoding OEM**
**npx webpack-bundle-analyzer stats.json**
