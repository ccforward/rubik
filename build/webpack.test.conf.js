const webpack = require('webpack')
const nib = require('nib')
const path = require('path')
const projectRoot = path.resolve(__dirname, '../')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

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
        loader: 'css-loader!stylus-loader'
      }
    ]
  },
  devServer: {
    colors: true,
    chunks: false,
    stats: 'errors-only'
  },
  stylus: {
    use: [nib()],
    import: ['~nib/lib/nib/index.styl'],
    "include css": true
  },
  plugins: [
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: false
    //   }
    // }),
    // new ExtractTextPlugin('rubik.min.css')
  ]
}