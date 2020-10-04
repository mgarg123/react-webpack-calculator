const path = require('path')
const htmlPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, './src/index.js'),
    output: {
        filename: 'main.bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: "babel-loader"
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    // resolve: {
    //     extensions: ['.js', '.jsx']
    // },
    plugins: [
        new htmlPlugin({ template: './public/index.htm' })
    ],
    devServer: {
        historyApiFallback: true,
        hot: true,
        port: 3000
    }
}