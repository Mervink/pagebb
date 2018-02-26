const path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var extractPlugin = new ExtractTextPlugin({
   filename: '../css/bundle.css'
});

module.exports = {
    entry: {
        app: './Resources/js/app.js'
    },
    output: {
        path: path.resolve(__dirname, 'public/js'),
        filename: 'app.bundle.js',
        publicPath: '/public'
    },
    module:{
        rules: [
            {
                test: /\.js?$/, 
                exclude: [/node_modules/],
                use: [
                    {
                        loader: 'babel-loader',
                        options:{
                            presets: ['env']
                        }
                    }

                ]

            },
            {
                test: /\.scss$/,
                exclude: [/node_modules/],
                use: extractPlugin.extract({
                    use: ['css-loader', 'sass-loader']
                })
                
            }

        ]
    },
    plugins: [
        extractPlugin
    ]

};