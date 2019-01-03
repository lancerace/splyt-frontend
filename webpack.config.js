const path = require('path');
const webpack = require('webpack');
module.exports = {
  mode: 'development',
  // "production" | "development" | "none".
  //production option minified bundle,wheras development option doesn't
  entry: './src/index.js', // string | object | array
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    /*configuration regarding modules
      rules.use []
    */
    rules: [
      {
        use: [
          {
            loader: 'babel-loader',
            options: {
              //value in options is passed to the loader, which should interpret it as loader options.
              //@param  is equivalent to ["@babel/preset-react"]
              presets: ["@babel/react"],
              plugins: ['react-hot-loader/babel']
            }
          }
        ]
      }
    ]
  }, //end module:
  resolve: {
    //option for resolving module request
    extensions: ['.js', '.jsx', 'css']
  },
  devServer: {
    /*@param contentBase config webpack dev server to serve file in ./src directory.
      @param hot Enable webpack to use Hot Module Replacement Feature. This configuration allow you to
      exclude --hot --inline in package.json script
    */
    contentBase: './dist',
    hot: true
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
}
