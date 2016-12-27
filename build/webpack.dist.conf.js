const webpack = require('webpack')
const path = require('path')
const projectRoot = path.resolve(__dirname, '../')


module.exports = {
  devtool: false,
  watch: process.env.TARGET === 'dev',
  entry: {
    app: './src/index.js'
  },
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
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    // new webpack.LoaderOptionsPlugin({
    //   minimize: true,
    //   progress: true,
    //   hide_modules: true
    // })
  ]
}