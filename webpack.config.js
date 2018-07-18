const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/public',
    filename: './bundle.js',
  },

  module: {
    loaders: [
      {
        test:/.js?$/,
        loader: 'babel-loader',
        exclude: 'node_modules',
        query: {
          presets: ['es2015', 'react', 'stage-2'],
        }
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader")
      }
    ],
  },

  plugins: [
    new ExtractTextPlugin('app.css')
  ],
  
  devServer: {
    port: 8080,
    contentBase: './public'
  }

}