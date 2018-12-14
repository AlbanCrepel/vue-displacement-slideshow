const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

var config = {
    output: {
        path: path.resolve(__dirname + '/dist/'),
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: __dirname,
                exclude: /node_modules/
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,
                loader: 'style!less!css'
            },
            {
                test: [/\.vert$/, /\.frag$/, /\.glsl$/],
                use: 'raw-loader',
            },
        ]
    },
    externals: {
        vue: 'vue'
    },
    plugins: [
        new UglifyJsPlugin( {
            uglifyOptions : {
                minimize : true,
                sourceMap : false,
                mangle: true,
                compress: {
                    warnings: false
                }
            }
        } )
    ]
};


module.exports = [
    merge(config, {
        entry: path.resolve(__dirname + '/src/VueDisplacementSlideshow.vue'),
        output: {
            filename: 'vue-displacement-slideshow.js',
            libraryTarget: 'umd',
            library: 'vue-displacement-slideshow',
            umdNamedDefine: true
        }
    })
];