const path = require("path");
const webpack = require("webpack");
const WriteFilePlugin = require("write-file-webpack-plugin");
const ExtractCssChunks = require("extract-css-chunks-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

/**
 * @author LancerAce
 * documentation: https://webpack.js.org/loaders/
 * @documentation node path.resolve and path.join: https://nodejs.org/api/path.html#path_path_resolve_paths
 * @param mode "production" | "development" | "none". production option minified bundle,wheras development option doesn't
 * @param output.path specify output directory of the result
 * @param output.publicpath specify the public URL of the output directory relative from the view of the HTML page.
 * @param output.filename allow code splitting, multiple creation of css,js file from webpack chunks. Does not affect output files for on-demand-loaded chunks
 * @param entry specify string | object | array
 * @param target important in order not to bundle built-in modules like path, fs, etc. default value = 'web'
 * @param regexp docs: https://www.regextester.com/104339  , https://www.rexegg.com/regex-quickstart.html
 * @param optimization docs: https://webpack.js.org/plugins/split-chunks-plugin/#splitchunkscachegroups , docs:https://webpack.js.org/guides/code-splitting/#entry-points
 * @param plugins{MiniCssExtractPlugin} docs: MiniCssExtractPlugin gets your .css/scss in src folder and extracts it into a separate .css file in your ./dist directory for production.
 * For long term caching use filename: "[contenthash].css". Optionally add [name].
 *
 */

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./dist"), //tell webpack the directory where it output js,index.html to
    publicPath: "/", //the url of output.path shown in browser
    filename: "[name].bundle.js",
    hotUpdateChunkFilename: "[name].bundle.hot-update.js"
  },
  resolve: {
    alias: {
      "react-dom": "@hot-loader/react-dom"
    }
  },
  /* webpack boilerplate generated per chunks is approxiately 74.77kb.
   * Alway set priority value to prevent chunks rule from override against each other
   * commons chunk is of higher precedence if priority value is the same.
   */
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/](react|react-dom|lodash)[\\/]/,
          chunks: "all",
          priority: 2,
          enforce:true
        },
        commons: {
					chunks: "initial",
					maxInitialRequests: 5, // The default limit is too small to showcase the effect
          enforce:true,
          priority: 1,
				}
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        //array of entries,each entry contain a loader
        use: [
          {
            loader: "babel-loader"
            /** value in options is passed to the loader, which should interpret it as loader options.
             *  react-hot-loader/babel preserve component state
             *  doc: https://gaearon.github.io/react-hot-loader/getstarted/
             *  @param  is equivalent to ["@babel/preset-react"]
             */
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[path][name].[ext]",
              publicPath: "/dist/",
              outputPath: "fonts"
            }
          },
          {
            loader: "url-loader",
            options: { limit: 8192 }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: ExtractCssChunks.loader,
            options: { hot: true }
          },
          {
            loader: "css-loader", //generating unique classname
            options: {
              importLoaders: 3, // if specifying more loaders
              modules: true, //enable babel-plugin css-module, set to true as default is false. setting to true disable className,enable babel-plugin-css-module. else otherwise
              url: false,
              sourceMap: true,
              // This matches the babel plugin's css module setting.need to be added for babel-plugin-css-module. docs: https://github.com/webpack-contrib/css-loader#local-scope
              localIdentName: "[path]___[name]__[local]___[hash:base64:5]" //babel-plugin-css-module generated name format
              //localIdentName: "[path][name]__[local]"  //recommended settings by cssloader#local-scope , this option generate unique classname for compiled css
            }
          }
        ]
      }
    ] //end rule array
  }, //end module:
  //devtool: "eval-source-map",
  resolve: {
    modules: ["node_modules", "component"],
    extensions: [".js", ".jsx", ".css"]
  },
  devServer: {
    //devServer serve file from in-memory. direct to  localhost:8080//webpack-dev-server for more info
    //publicPath: "/",
    //contentBase: path.join(__dirname, ""), //Tell the server where to serve content from
    historyApiFallback: true,
    hot: true,
    open: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.SourceMapDevToolPlugin(),
    new ExtractCssChunks({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "./assets/[name].css",
      chunkFilename: "./assets/[name].css", //dynamic import ES6 Code splitting
      orderWarning: true // Disable to remove warnings about conflicting order between imports
    }),
    new HtmlWebpackPlugin({
      title: "ReactTest",
      template: path.resolve(__dirname, "./src/index.html")
    }),
    new BundleAnalyzerPlugin()
  ]
};
