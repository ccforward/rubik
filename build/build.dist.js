process.env.NODE_ENV = 'production'
const webpack = require('webpack')
const ora = require('ora')
let builds  = require('./config.dist').getAllBuilds()
// require('./stylus')

// const stylus = require('stylus')
// const fs = require('fs')
// const path = require('path')
// const resolve = file => path.resolve(__dirname, file)
// let styles = fs.readFileSync(resolve('../src/stylus/main.styl'), 'utf8')
// stylus(styles)
//   .include(resolve('../src/stylus'))
//   .set('compress', true)
//   .render((err, css) => {
//     fs.writeFileSync(resolve('../dist/vuetify.min.css'), css)
//   })

var spinner = ora('building for production...')

function build (builds) {
  builds.forEach(config => {
    spinner.start()
    webpack(config, function (err, stats) {
      spinner.stop()
      if (err) throw err
      process.stdout.write(stats.toString({
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false
      }) + '\n')
    })
  })
}


build(builds)


