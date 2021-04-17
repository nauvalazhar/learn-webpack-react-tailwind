const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const Webpackbar = require("webpackbar");
const devMode = process.env.NODE_ENV !== 'production';

const plugins = [
    new Webpackbar(),
    new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "src", "index.html")
    }),
    new CleanWebpackPlugin()
];

if (!devMode) {
    plugins.push(new MiniCssExtractPlugin());
}

module.exports = {
    plugins,
    output: {
        path: path.resolve(process.cwd(), "dist")
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    devMode ? "style-loader" : MiniCssExtractPlugin.loader,
                    "css-loader", 
                    "postcss-loader"
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            }
        ]
    },
    optimization: {
        minimizer: [
            new CssMinimizerPlugin(),
        ]
    },
    devServer: {    
        contentBase: path.resolve(__dirname, 'dist'),
        watchContentBase: true,  
        hot: true,
    },
    cache: false,
};

