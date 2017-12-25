var path = require('path');
var webpack = require('webpack');

module.exports = {
  devServer: {
      inline: true,
      contentBase: './client',
      port: 3000
  },
  devtool: 'cheap-module-eval-source-map',
  entry: './client/app-container.js',
  output: {
      path: 'public',
      filename: 'bundle.min.js'
  },
  module: {
    loaders: [
      {
          test: /\.js$/,
          loaders: ['babel'],
          exclude: /node_modules/
      },
      {
          test: /\.scss/,
          loader: 'style-loader!css-loader!sass-loader'
      }
    ]
  },
  resolve: {
    extensions: ["", ".js", ".react.js"]
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin()
  ]
};
