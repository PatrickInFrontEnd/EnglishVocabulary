const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MinifyCssPlugin = require("mini-css-extract-plugin");
const MinifyJSPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
    mode: "production",
    output: {
        filename: "[name].[contentHash].bundle.js",
        path: path.resolve(__dirname, "../dist"),
    },
    stats: "verbose",
    optimization: {
        minimizer: [new MinifyJSPlugin()],
    },
    module: {
        rules: [
            {
                test: /\.(css|sass|scss)$/,
                exclude: /node_modules/,
                use: [MinifyCssPlugin.loader, "css-loader", "sass-loader"],
            },
        ],
    },
    plugins: [
        new MinifyCssPlugin({
            filename: "[name].[contentHash].css",
        }),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "./public/template.html",
            filename: "./index.html",
            minify: {
                collapseWhitespace: true,
                removeComments: true,
            },
        }),
    ],
});
