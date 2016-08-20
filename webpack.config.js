'use strict';

module.exports = {
    entry: __dirname + "/app/app",

    output: {
        path: __dirname + "/app/assets/scripts",
        filename: "bundle.js"
    },

    module: {
        loaders: [{
            test: /\.js$/,
            loader: "babel?presets[]=es2015"
        }]
    }
};