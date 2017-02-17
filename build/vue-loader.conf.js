const config = require('./config')
const utils = require('./utils')
const env = process.env.NODE_ENV
// check env & config/index.js to decide whether to enable CSS source maps for the
// various preprocessor loaders added to vue-loader at the end of this file
const cssSourceMapDev = (env === 'development' && config.dev.cssSourceMap)
const cssSourceMapProd = (env === 'production' && config.build.productionSourceMap)
const useCssSourceMap = cssSourceMapDev || cssSourceMapProd

module.exports = {
  loaders: utils.cssLoaders({ sourceMap: useCssSourceMap }),
  postcss: [
    require('autoprefixer')({
      browsers: ['last 3 versions']
    })
  ]
}