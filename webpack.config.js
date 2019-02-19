const path = require("path");
const webpack = require("webpack");

/**
 * @author LancerAce
 * @param mode "production" | "development" | "none". production option minified bundle,wheras development option doesn't
 * @param output.path specify webpack on where to output the result
 * @param output.publicpath specify The URL of your output.path from the view of the HTML page.
 * @param entry specify string | object | array
 * @param target important in order not to bundle built-in modules like path, fs, etc. default value = 'web'
 */

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    //publicPath:
    path: path.join(__dirname, "/dist"),
    filename: "bundle.js"
  },
  //  target: "node",
  module: {
    /**
     *
     * 3 ways of declaration for rules.use [].
     * =============================================================
     * 1. {test: ,include: ,exclude:, loader:, options:{preset:}} .
     * 2. use[{loader:,options:}] .
     * 3. multiple object of { test: /\.css$/, use: 'css-loader' },
     * loaders in use: [] is executed similar to stack. last to first.
     * documentation: https://webpack.js.org/concepts/loaders/#loader-features
     * https://webpack.js.org/concepts/loaders/
     */
    rules: [
      {
        //test: /\.jsx$/,
        //  exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            /** value in options is passed to the loader, which should interpret it as loader options.
             *  react-hot-loader/babel preserve component state
             *  doc: https://gaearon.github.io/react-hot-loader/getstarted/
             *  @param  is equivalent to ["@babel/preset-react"]
             */
            options: {
              presets: ["@babel/react"],
              plugins: ["react-hot-loader/babel"]
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
            options: {sourceMap: true}
          },
          {
            loader: "css-loader",
            options: {sourceMap: true}
          }
        ]
      }
    ] //end rule array
  }, //end module:
  //devtool: "inline-source-map", //for development. || eval-source-map
  devtool: "eval-source-map",
  resolve: {
    //option for resolving module request
    extensions: [".js", ".jsx", ".css"]
  },
  devServer: {
    /**
     * @param contentBase config webpack dev server to serve file in ./src directory.
     * @param hot Enable webpack to use Hot Module Replacement Feature. This configuration allow you to
     * exclude --hot --inline in package.json cmd scripting
     */
    contentBase: path.resolve(__dirname, "dist"),
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.SourceMapDevToolPlugin()
  ]
};
