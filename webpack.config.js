'use strict';

const webpack = require('webpack');
const NgAnnotatePlugin = require('ng-annotate-webpack-plugin');

module.exports = {
    /**
     * Context
     * @see http://webpack.github.io/docs/configuration.html#context
     */
    context: __dirname + '/app',

    /**
     * Entry
     * Should be an empty object if it's generating a test build
     * Karma will set this when it's a test build
     * @see http://webpack.github.io/docs/configuration.html#entry
     */
    entry: {
        app: './app',
        vendors: ['angular', 'angular-ui-router'],
    },

    /**
     * Output
     * Should be an empty object if it's generating a test build
     * Karma will handle setting it up for you when it's a test build
     * @see http://webpack.github.io/docs/configuration.html#outputc
     */
    output: {
        path: __dirname + '/assets/scripts',
        publicPath: '/assets/scripts/',
        filename: '[name].js'
    },

    /**
     * Resolve
     * Options affecting the resolving of modules
     * @see https://webpack.github.io/docs/configuration.html#resolve
     */
    // resolve: {
    //     alias: {
    //         components: __dirname + '/app/components',
    //         directives: __dirname + '/app/directives',
    //         services: __dirname + '/app/services',
    //         views: __dirname + '/app/views'
    //     }
    // },

    /**
     * Loaders
     * This handles most of the magic responsible for converting modules
     * @see http://webpack.github.io/docs/list-of-loaders.html
     * @see http://webpack.github.io/docs/configuration.html#module-loaders
     */
    module: {
        loaders: [
            /**
             * JS loader
             * Transpile .js files using babel-loader
             * Compiles ES6 and ES7 into ES5 code
             * @see https://github.com/babel/babel-loader
             */
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015'],
                    plugins: ['transform-runtime']
                }
            }
        ]
    },

    /**
     * Plugins
     * @see http://webpack.github.io/docs/configuration.html#plugins
     * @see http://webpack.github.io/docs/list-of-plugins.html
     */
    plugins: [
        /**
         * Minify all javascript, switch loaders to minimizing mode
         * @see http://webpack.github.io/docs/list-of-plugins.html#uglifyjsplugin
         */
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),

        /**
         * Runs ng-annotate on your bundles
         * @see https://github.com/jeffling/ngmin-webpack-plugin
         */
        new NgAnnotatePlugin({
            add: true
        }),

        /**
         * Only emit files when there are no errors
         * @see http://webpack.github.io/docs/list-of-plugins.html#noerrorsplugin
         */
        new webpack.NoErrorsPlugin(),

        /**
         * Split app and vendor code
         * Splits the app into two files
         * @see https://webpack.github.io/docs/code-splitting.html#split-app-and-vendor-code
         */
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendors'
        })
    ],

    /**
     * Dev server configuration
     * @see http://webpack.github.io/docs/configuration.html#devserver
     * @see http://webpack.github.io/docs/webpack-dev-server.html
     */
    devServer: {
        contentBase: __dirname + '/app',
        historyApiFallback: true
    }
};