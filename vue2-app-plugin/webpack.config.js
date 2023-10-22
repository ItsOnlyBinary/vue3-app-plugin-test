const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    mode: 'development',
    entry: './src/plugin.js',
    output: {
        filename: 'app-plugin.js',
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
            },
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
    ],
    devtool: 'source-map',
    devServer: {
        static: path.join(__dirname, "dist"),
        compress: true,
        port: 8491,
        headers: {
            "Access-Control-Allow-Origin": "*"
        }
    }
};
