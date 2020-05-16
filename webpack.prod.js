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
        /* [contentHash] - creates unique name of file once we've changed our code (prevents from auto caching when filename is still the same)*/
        path: path.resolve(__dirname, "dist"),
    },
    stats: "verbose",
    optimization: {
        minimizer: [new MinifyJSPlugin()], //NOTE: You can add some other minimizers, but this option OVERWRITE default behaviour of default minimizers (for example for Javascript - terser), so that you are going to have to add manually every default minimizer you wanna use
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    MinifyCssPlugin.loader, //Extract CSS code into files
                    "css-loader", //Turns CSS code into commonJS code
                    "sass-loader", //Turn SASS code into CSS code
                ],
                //IMPORTANT: webpack "use" works from the very end of our array 1.sass 2.css 3.style loader
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
