const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './querystring.js',
  output: {
    path: path.resolve(__dirname),
    filename: 'querystring.min.js',
    library: 'Querystring',
    libraryTarget: 'umd'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ]
}