const gulp = require('gulp');
const gutil = require('gulp-util');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const WebpackConfig = require('./webpack.config');
const mocha = require('gulp-mocha');

gulp.task('webpack-dev-server', function (callback) {
    var myConfig = Object.create(WebpackConfig);
    myConfig.debug = true;

    var compiler = webpack(myConfig);

    new WebpackDevServer(compiler, {
        publicPath: '/',
        stats: {
            colors: true
        },
        // It suppress error shown in console, so it has to be set to false.
        quiet: false,
        // It suppress everything except error, so it has to be set to false as well
        // to see success build.
        noInfo: false,
        stats: {
            // Config for minimal console.log mess.
            assets: false,
            colors: true,
            version: false,
            hash: false,
            timings: false,
            chunks: false,
            chunkModules: false
        }
    }).listen(9000, 'localhost', function (err) {
        if (err) {
            throw new gutil.PluginError('webpack-dev-server', err);
        }
        gutil.log('[webpack-dev-server]', 'http://localhost:9000/');
    });
});

gulp.task('scripts:test', function () {
    gutil.log('[scripts]', 'Some files were changed!');

    return gulp.src('./tests/**/*Spec.js', {
            read: false
        })
        .pipe(mocha());
});

gulp.task('default', [
    'webpack-dev-server',
    'scripts:test',
    'watch'
]);

gulp.task('watch', function () {
    gulp.watch([
        './app/*',
        './app/components/**/*.js'
    ], ['scripts:test']);
});
