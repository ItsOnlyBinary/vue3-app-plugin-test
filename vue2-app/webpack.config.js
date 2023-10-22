const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HTMLPlugin = require('html-webpack-plugin');
const { DefinePlugin } = require('webpack');

module.exports = {
    mode: 'development',
    entry: './src/main.js',
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: 'auto',
    },
    resolve: {
        alias: {
            '@': path.join(__dirname, 'src'),
            'vue$': 'vue/dist/vue.common.js',
        },
        extensions: ['.js', '.jsx', '.vue', '.json'],
    },
    performance: {
        maxEntrypointSize: 9999999,
        maxAssetSize: 9999999,
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.js$/,
                use: [{loader: 'babel-loader'}],
                include: [
                    path.join(__dirname, 'src'),
                ]
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HTMLPlugin({
            template: path.join(__dirname, 'index.html'),
            // templateParameters: {
            //     NODE_ENV: env.NODE_ENV,
            // },
            minify: false,
        }),
        new DefinePlugin({
            // Vue 3 feature flags http://link.vuejs.org/feature-flags
            '__VUE_OPTIONS_API__': 'true',
            '__VUE_PROD_DEVTOOLS__': 'false',

            'process.env': {},
        }),
    ],
    devtool: 'source-map',
    devServer: {
        static: path.join(__dirname, "dist"),
        compress: true,
        port: 8490,
        headers: {
            "Access-Control-Allow-Origin": "*"
        }
    }
};
