const path = require('path');
const HtmlwebpackPlugin = require('html-webpack-plugin');
const NpmInstallPlugin = require('npm-install-webpack-plugin');
const merge = require('webpack-merge');
const webpack = require('webpack');

const TARGET = process.env.npm_lifecycle_event;
const PATHS = {
    app: path.join(__dirname, 'app'),
    build: path.join(__dirname, 'build'),
};

process.env.BABEL_ENV = TARGET;

const common = {
    entry: './app/index.jsx',
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    output: {
        path: PATHS.build,
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.css$/,
            loaders: ['style', 'css'],
            include: PATHS.app
      }, {
            test: /\.jsx?$/,
            loaders: ['babel?cacheDirectory'],
            include: PATHS.app
    }]
    },
    plugins: [
    new HtmlwebpackPlugin({
            template: 'node_modules/html-webpack-template/index.html',
            title: 'dev-ci-view',
            appMountId: 'app'
        })
  ]
};

if (TARGET === 'start' || !TARGET) {
    module.exports = merge(common, {
        devtool: 'source-map',
        devServer: {
            historyApiFallback: true,
            hot: true,
            inline: true,
            progress: true,

            // display only errors to reduce the amount of output
            stats: 'errors-only',

            // parse host and port from env so this is easy
            // to customize
            host: 'localhost',
            port: 9000,
            contentBase: PATHS.build
        },
        plugins: [
      new webpack.HotModuleReplacementPlugin()
    ]
    });
}

if (TARGET === 'build') {
    module.exports = merge(common, {});
}
