const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env) => ({
  mode: env.mode || "development",
  //   entry: "./src/index.js",
  entry: path.resolve(__dirname, "src", "index.js"),
  //   entry: {
  //     hello_1: path.resolve(__dirname, "src", "index.js"),
  //     hello_2: path.resolve(__dirname, "src", "test.js"),
  //   },
  output: {
    path: path.resolve(__dirname, "build"),
    // filename: "build.js",
    filename: "[name].[contenthash].js",
    clean: true,
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
});
