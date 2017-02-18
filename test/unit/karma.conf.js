// Karma configuration

const webpackConfig = require('../../build/webpack.base.conf');

delete webpackConfig.entry;


module.exports = function(config) {
  config.set({
    browsers: ['PhantomJS'],

    frameworks: ['mocha', 'sinon-chai'],

    // list of files / patterns to load in the browser
    files: [
      './index.js'
    ],

    preprocessors: {
      './index.js': ['webpack', 'sourcemap']
    },

    webpack: webpackConfig,

    plugins: [
      'karma-webpack',
      'karma-sourcemap-loader',
      'karma-mocha',
      'karma-chai',
      'karma-sinon-chai',
      'karma-chrome-launcher',
      'karma-phantomjs-launcher'
    ],

    reporters: ['progress'],

    // reporters: ['spec', 'coverage'],

    coverageReporter: {
      dir: './coverage',
      reporters: [
        { type: 'lcov', subdir: '.' },
        { type: 'text-summary' }
      ]
    },

    port: 9876,


    colors: true,


    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    concurrency: Infinity
  })
}
