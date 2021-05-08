const path = require("path");
module.exports = {
    entry: './index.mjs',
    target: 'node14',
    mode: 'production',
    output: {
        path: path.resolve(__dirname),
        filename: 'index.js',
        libraryTarget: 'module'
    },
    experiments: {
        outputModule: true,
    }
    /*module: {
        rules: [
            {
                test: /\.m?js$/,
                // exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }*/
}
