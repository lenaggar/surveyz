'use strict'

var webpack = require('webpack')
var PATHS = require('./webpack-paths')

exports.devServer = function (options) {
  return {
    devServer: {
      historyApiFallback: true,
      hot: true, // Enable hot module
      inline: true,
      stats: 'errors-only',
      host: options.host, // http://localhost
      port: options.port, // 3000
      contentBase: './client/dist'
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin({ multistep: true })
    ]
  }
}

exports.css = {
  test: /\.css$/,
  use: ['style-loader', 'css-loader'],
  include: PATHS.css
}

exports.font = {
  test: /\.ttf$/,
  use: ['file-loader']
}

exports.babel = {
  test: /\.jsx?$/,
  exclude: /node_modules/,
  use: ['babel-loader']
}
