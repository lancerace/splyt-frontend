const path = require('path');
const webpack = require('webpack');
module.exports {
  mode: 'development', // "production" | "development" | "none"
  entry: './src/main.jsx', // string | object | array
  output: {
    /*__dirname = directory name of current module.
      path.resolve execute from right to left for n paramaeter. etc path.resolve(n3,n2,n1);
    */
    path: path.resolve(__dirname),
    filename: 'bundle.js'
  },
  module: {
    //configuration regarding modules
    rules: [{
      loader: 'babel-loader',
      options: {
        //value in options is passed to the loader, which should interpret it as loader options.
        presets: ["es2015"]
      },
    }]
  },
  resolve: {
    //option for resolving module request
    extensions: ['.js', '.jsx', 'css']
  },
  plugins: [
    //...
  ],
}