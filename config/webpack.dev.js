const { merge } = require('webpack-merge');
const path = require('path');
const  ModuleFederationPlugin  = require('webpack/lib/container/ModuleFederationPlugin');
const packageJson = require('../package.json');
const { AngularWebpackPlugin } = require('@ngtools/webpack');

const devConfig = {
  mode: 'development',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: 'http://localhost:4200/',
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, '../dist'),
    },
    hot: true,
    port: 4200,
    historyApiFallback: true,
    client: {
      overlay: false,
    },
  },
  devtool: 'inline-source-map',
  plugins: [
    new ModuleFederationPlugin({
      name: 'angular_test',
      filename: 'remoteEntry.js',
      exposes: {
        './AngularTestApp': './src/bootstrap',
      },
      remotes: {
        dashboard_test: 'dashboard_test@http://localhost:3005/remoteEntry.js',
      },
      shared: packageJson.dependencies,
    }),
    new AngularWebpackPlugin({
      tsconfig: path.resolve(__dirname, '../tsconfig.app.json'),
      jitMode: false, // ✅ ეს უთხრას რომ AOT ფორმატში გაკომპილოს
      directTemplateLoading: true,
      jitter: false,
  }),
  ],
};

module.exports = merge(require('./webpack.common'), devConfig);
