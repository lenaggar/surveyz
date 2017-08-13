'use strict'

var merge = require('webpack-merge')
var PATHS = require('./webpack-paths')
var loaders = require('./webpack-loaders')

var common = {
  entry: {
    app: PATHS.src
  },
  output: {
    path: PATHS.dist,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      loaders.babel,
      loaders.css,
      loaders.font
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
}

var config

switch (process.env.NODE_ENV.trim()) {
  case 'build':
    config = merge(
        common,
        { devtool: 'source-map' } // SourceMaps on separate file
      )
    break
  case 'development':
    config = merge(
        common,
        { devtool: 'eval-source-map' }, // Default value
        loaders.devServer({
          host: process.env.host,
          port: 3000
        })
    )
}

module.exports = config
