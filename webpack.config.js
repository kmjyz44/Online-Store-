const path = require('path')

module.exports = {
    
        entry: path.resolve(__dirname, './src/index.js')
    
}
module.exports = {
    // ...

    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
    },
}
const webpack = require('webpack')
module.exports = {
    // ...
    mode: 'development',
    devServer: {
        historyApiFallback: true,
        contentBase: path.resolve(__dirname, './dist'),
        open: true,
        compress: true,
        hot: true,
        port: 8080,
    },
    plugins: [
        // ...
        // применять изменения только при горячей перезагрузке
        new webpack.HotModuleReplacementPlugin(),
    ],
}

    
