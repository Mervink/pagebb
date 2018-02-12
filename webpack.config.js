const path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var extractPlugin = new ExtractTextPlugin({
   filename: 'Assets/css/bundle.css'
});

module.exports = {
    entry: {
        app: './Resources/js/app.js'
    },
    output: {
        path: path.resolve(__dirname, '/Assets/js'),
        filename: 'app.bundle.js'
    },
    module:{
        loaders: [
            {
                test: /\.js?$/, 
                loader: 'babel-loader', 
                exclude: /node_modules/,
                query:{
                    presets: ['env']
                }
            },
            {
                test: /\.scss$/,
                exclude: [/node_modules/],
                use: extractPlugin.extract({
                use: ['css-loader', 'sass-loader']})
                
            }

        ]
    },
    plugins: [
        extractPlugin
    ]

};