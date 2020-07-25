const FaviconWebpackPlugin = require("favicons-webpack-plugin");
module.exports = {
    entry: {
        main: "./src/index.js",
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query: {
                    presets: ["@babel/react"],
                },
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[name].[hash].[ext]",
                            outputPath: "imgs",
                            esModule: false,
                        },
                    },
                ],
            },
            {
                test: /\.html$/,
                loader: "html-loader",
                options: {
                    esModule: false,
                },
            },
        ],
    },
    plugins: [
        new FaviconWebpackPlugin({
            logo: "./public/favicon.png",
            favicons: {
                android: false,
                appleIcon: false,
                appleStartup: false,
                coast: false,
                favicons: false,
                firefox: false,
                windows: false,
                yandex: false,
            },
        }),
    ],
};
