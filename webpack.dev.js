const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
    mode: "development",
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
    },
    stats: "errors-warnings",
    devServer: {
        port: 5050,
    },
    module: {
        rules: [
            {
                test: /\.(sass|scss)$/,
                exclude: /node_modules/,
                use: [
                    "style-loader", //Injects CSS code into DOM
                    "css-loader", //Turns CSS code into commonJS code
                    "sass-loader", //Turn SASS code into CSS code
                ],
                //IMPORTANT: webpack "use" works from the very end of our array 1.sass 2.css 3.style loader
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/template.html",
            filename: "./index.html",
        }),
    ],
});
