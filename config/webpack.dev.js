const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');
const path = require('path');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const packageJson = require('../package.json');

const devConfig = {
    mode: 'development',
    // entry: './src/index.js',
    // output: {
    //     path: path.resolve(__dirname, 'dist'),
    //     filename: '[name].[contenthash].js',
    //     publicPath: '/',
    // },
    devtool: 'inline-source-map',
    devServer: {
        static: path.resolve(__dirname, 'dist'),
        hot: true,
        liveReload: true,
        compress: true,
        port: 4200,
        historyApiFallback: true,
        open: true,
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'angulartest',
            filename: 'remoteEntry.js',
            exposes: {
                './AngularTestApp': './src/main',
            },
            shared: packageJson.dependencies,
        }),
    ]
};

module.exports = merge(commonConfig, devConfig);