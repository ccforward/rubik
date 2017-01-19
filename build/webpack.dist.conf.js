const webpack = require('webpack')
const nib = require('nib')
const path = require('path')
const projectRoot = path.resolve(__dirname, '../')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const config = require('./config')

module.exports = {
  devtool: false,
  watch: process.env.TARGET === 'dev',
  entry: {
    app: './src/index.js'
  },
  // devtool: config.build.productionSourceMap ? '#source-map' : false,
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/dist/'
  },
  node: {
    fs: 'empty'
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        include: projectRoot,
        exclude: /node_modules/
      },
      {
        test: /\.styl$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!stylus-loader')
      }
    ]
  },
  stylus: {
    use: [nib()],
    import: ['~nib/lib/nib/index.styl'],
    "include css": true
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new ExtractTextPlugin('rubik.min.css')
  ]
}