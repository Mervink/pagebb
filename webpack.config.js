const path = require('path');

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
            }

        ]
    }

}