'use strict';

module.exports = {
    entry: __dirname + "/src/js/index",
    output: {
        path: __dirname + "/dist/js",
        filename: "bundle.js",
        library: 'app'
    },

    module: {
        loaders: [{
            test: /\.js$/,
            loader: "babel?presets[]=es2015"
        }]
    }
};