const webpack = require('webpack')
const path = require('path')
const vueConf = require('./vue-loader.conf')
const projectRoot = path.resolve(__dirname, '../')

module.exports = {
  devtool: false,
  watch: process.env.TARGET === 'dev',
  entry: {
    app: './src/index.js'
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueConf
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: projectRoot,
        exclude: /node_modules/
      },
      {
        test: /\.styl$/,
        loader: 'css-loader!stylus-loader'
      }
    ]
  },
  devServer: {
    stats: "errors-only"
  }
}