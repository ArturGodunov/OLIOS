'use strict';

const webpack = require('webpack');
const NgAnnotatePlugin = require('ng-annotate-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
        app: './app.js',
        vendors: ['angular', 'angular-ui-router'],
        styles: './app.scss'
    },

    /**
     * Output
     * Should be an empty object if it's generating a test build
     * Karma will handle setting it up for you when it's a test build
     * @see http://webpack.github.io/docs/configuration.html#outputc
     */
    output: {
        path: __dirname + '/assets',
        publicPath: '/',
        filename: 'scripts/[name].bundle.js'
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
            },

            /**
             * CSS loader
             * Allow loading css through js
             * @see https://github.com/webpack/css-loader
             * @see https://github.com/jtangelder/sass-loader
             * @see https://github.com/postcss/postcss-loader
             * @see https://github.com/bholloway/resolve-url-loader
             */
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('css!postcss-loader!resolve-url!sass?sourceMap')
            },

            /**
             * Assets loader
             * Copy png, jpg, jpeg, gif, svg, woff, woff2, ttf, eot
             * to output
             * Rename the file using the asset hash
             * Pass along the updated reference to your code
             * You can add here any file extension you want to get
             * copied to your output
             * @see https://github.com/webpack/file-loader
             */
            {
                test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
                loader: 'file?name=[path][name].[ext]'
            },

            /**
             * HTML loader
             * Allow loading html through js
             * @see https://github.com/webpack/raw-loader
             */
            {
                test: /\.html$/,
                loader: 'raw!html-minify'
            }
        ]
    },

    /**
     * Postcss
     * @see https://github.com/postcss/postcss-loader
     * @see https://github.com/postcss/autoprefixer#webpack
     */
    postcss: function () {
        return [
            autoprefixer({ browsers: ['last 3 versions'] })
        ];
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
        }),

        /**
         * @see https://webpack.github.io/docs/stylesheets.html#styles-from-initial-chunks-into-separate-css-output-file
         */
        new ExtractTextPlugin('styles/styles.css', {allChunks: true}),

        /**
         * Render index.html
         * Skip rendering index.html in test mode
         * @see https://github.com/ampedandwired/html-webpack-plugin
         */
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: 'body',
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                collapseBooleanAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true
            }
        })
    ],

    /**
     * Dev server configuration
     * @see http://webpack.github.io/docs/configuration.html#devserver
     * @see http://webpack.github.io/docs/webpack-dev-server.html
     */
    devServer: {
        contentBase: __dirname + '/assets'
    }
};