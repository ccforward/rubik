process.env.NODE_ENV = 'production'
const webpack = require('webpack')
const ora = require('ora')
const builds  = require('./config.dist').getAllBuilds()

const spinner = ora('building for production...')


// const stylus = require('stylus')
// const fs = require('fs')
// const path = require('path')
// const resolve = file => path.resolve(__dirname, file)
// const styles = fs.readFileSync(resolve('../src/style/main.styl'), 'utf8')
// stylus(styles)
//   .include(resolve('../src/style'))
//   .set('compress', true)
//   .render((err, css) => {
//     fs.writeFileSync(resolve('../dist/rubik.min.css'), css)
//   })



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


