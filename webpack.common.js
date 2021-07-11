const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isProd = process.env.NODE_ENV === "production";
const isDev = !isProd;

const filename = (ext) => (isDev ? `[name].${ext}` : `[name].[hash].${ext}`);

const htmlConfig = {
  title: "WH",
  filename: "index.html",
  inject: "body",
  scriptLoading: "defer",
  favicon: "./public/favicon.ico",
  meta: {
    viewport: "width=device-width,initial-scale=1",
  },
  template: "./public/index.html",
  minify: {
    removeComments: isProd,
    collapseWhitespace: isProd,
  },
};

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: filename("js"),
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: "babel-loader",
        options: {
          compact: isProd,
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: "file-loader",
        options: {
          name: "assets/[name].[ext]",
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin(htmlConfig),
    new MiniCssExtractPlugin({
      filename: filename("css"),
    }),
  ],
};
