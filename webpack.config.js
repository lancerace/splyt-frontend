const path = require("path");
const webpack = require("webpack");

/**
 * @author LancerAce
 * documentation: https://webpack.js.org/loaders/
 * @param mode "production" | "development" | "none". production option minified bundle,wheras development option doesn't
 * @param output.path specify webpack on where to output the result
 * @param output.publicpath specify The URL of your output.path from the view of the HTML page.
 * @param entry specify string | object | array
 * @param target important in order not to bundle built-in modules like path, fs, etc. default value = 'web'
 */

module.exports = {
  mode: "development",
  entry: "./src/index.jsx",
  output: {
    publicPath: "dist/",
    //path: path.resolve(__dirname, "/dist/assets"),
    filename: "bundle.js"
    //pathinfo: true
  },

  //  target: "node",
  module: {
    /**
     *
     * 3 ways of declaration for rules.use [].
     * =============================================================
     * 1. {test: ,include: ,exclude:, loader:, options:{preset:}} .
     * 2. { use: [{loader:,options:}] } .
     * 3. multiple objects(entries) of { test: /\.css$/, use: 'css-loader' },
     * loaders in use: [] is executed similar to stack. fILO
     * documentation: https://webpack.js.org/concepts/loaders/#loader-features
     * https://webpack.js.org/concepts/loaders/
     * Rules:[use:[{}]] docs: https://webpack.js.org/configuration/module/#nested-rules
     */
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        //array of entries,each entry contain a loader
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
        test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'file-loader',
            options:{
              name:'[path][name].[ext]',
              publicPath: "dist/",
              outputPath:'fonts'
            }
          },
          {
            loader:"url-loader",
            options:{limit:8192}
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
                options: {
                  importLoaders: 2, // if specifying more loaders
                  modules: true, //enable babel-plugin css-module, set to true as default is false. setting to true disable className,enable babel-plugin-css-module. else otherwise
                  sourceMap: true,
                  // This matches the babel plugin's css module setting.need to be added for babel-plugin-css-module
                  localIdentName: "[path]___[name]__[local]___[hash:base64:5]"
                }
              }
            ]
          }
    ] //end rule array
  }, //end module:
  //devtool: "inline-source-map", //for development. || eval-source-map
  devtool: "eval-source-map",
  resolve: {
    modules: ["node_modules", "component"],
    //option for resolving module request
    extensions: [".js", ".jsx", ".css"],
  },
  devServer: {
    /**
     * @docs The dev server uses webpack’s watch mode. It also prevents webpack from emitting the resulting files to disk.
     *       Instead it keeps and serves the resulting files from memory.
     * @param contentBase config webpack dev server to serve file in ./src directory.
     * @param hot Enable webpack to use Hot Module Replacement Feature. This configuration allow you to
     * exclude --hot --inline in package.json cmd scripting
     */
    //publicPath: '/dist'
    contentBase: path.resolve(__dirname, "./dist"),
    historyApiFallback: true,
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.SourceMapDevToolPlugin()
  ]
};
