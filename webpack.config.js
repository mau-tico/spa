const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Crear modulo
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),

        // Aqui se va a compilar el /src/index.js con el nombre main,js o buldle.js
        filename: 'main.js',
    },

    //Extensiones
    resolve: {
        extensions: ['.js'],
    },

    //Reglas
    module: {
        rules: [{
            test: /\.js?$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
            }
        }] //Fin de rules
    },

    //Plugins
    plugins: [
        new HtmlWebpackPlugin([
            {
                inject: true,
                template: './public/index.html',
                filename: './index.html',
            }
        ])
    ],

};