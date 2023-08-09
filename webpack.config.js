const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "production",
    entry: {
        index: path.resolve(__dirname, './main.js'),
        home: path.resolve(__dirname, './src/pages/home/index.js')
    },
    output: {
        filename: "[name]/index-[hash:6].js",
        path: path.resolve(__dirname, "./build")
    },
    // 插件
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './index.html'),
            filename: "index/index.html",
            chunks: ["index"]
        }),
        new HtmlWebpackPlugin({
            inject: true,
            template: path.resolve(__dirname, './src/pages/home/index.html'),
            filename: "home/index.html",
            chunks: ["home"]
        })
    ]
}
