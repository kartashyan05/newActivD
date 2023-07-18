"use strict";

/* let path = require("path");

module.exports = {
  mode: "development",
  entry: "./js/script.js",
  output: {
    filename: "bundle.js",
    path: __dirname + "/js",
  },
  watch: true,

  devtool: "source-map",

  module: {},
};
 */
const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const JsonMinimizerPlugin = require("json-minimizer-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    //filename: "bundle.js",
    filename: "bundle.[contenthash].js",
    path: path.resolve(__dirname, "./dist"),
    publicPath: "",
    //publicPath: "/dist/",
    //clean: true,
    //clean: {
    //dry: true,
    //keep: /\.css/,
    //},
    //devtool: "source-map",
  },
  mode: "none",
  module: {
    rules: [
      {
        test: /\.(png|jpg)$/,
        //type: "asset/resource",
        //type: "asset/inline",
        type: "asset",
        /* parser: {
          dataUrlCondition: {
            maxSize: 3 * 1024, // 3 kb
          },
        }, */
      },
      /*  {
        test: /\.txt/,
        type: "asset/source",
      }, */
      {
        test: /\.css/,
        // use:"style-loader", "css-loader",
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.scss/,
        // use:"style-loader", "css-loader", "sass-loader",
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/env"],
            plugins: ["@babel/plugin-proposal-class-properties"],
          },
        },
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.hbs$/,
        use: ["handlebars-loader"],
      },

      {
        test: /\.json$/i,
        //type: "json",
        type: "asset/resource",
        //type: "module",
      },
    ],
  },
  plugins: [
    new TerserPlugin(),
    new MiniCssExtractPlugin({
      filename: "styles.[contenthash].css",
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Fresh bood",
      filename: "custom.html",
      template: "./src/index.html",
      description: "Some description",
      // meta: {
      // description: "Some description",
      //},
      //}),
      //new CleanWebpackPlugin({
      //cleanOnceBeforeBuildPatterns: [
      //"**/*",
      //path.join(process.cwd(), "build/**/*"),
      //],
    }),
    new JsonMinimizerPlugin(),
  ],
};
