const { mix } = require('laravel-mix');
const webpack = require('webpack');

mix.webpackConfig({
    output: {
        path: __dirname + '/web',
    },
    externals: {
        jquery: '$',
        lodash: '_',
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"',
            },
        }),
    ],
});

mix
    .sass('./assets/scss/app.scss', 'css/app.css', {
        importer: require('node-sass-import'),
    })
    .js('./assets/js/app.js', 'js/app.js')
    .options({
        processCssUrls: false
    });
