/**
 * @author: @AngularClass
 */

module.exports = function (config) {
  var testWebpackConfig = require('./webpack.test.js')({ env: 'test' });

  var configuration = {

    /**
     * Base path that will be used to resolve all patterns (e.g. files, exclude).
    */
    basePath: '',

    /**
     * Frameworks to use
     *
     * available frameworks: https://npmjs.org/browse/keyword/karma-adapter
     */
    frameworks: ['jasmine'],

    /**
     * List of files to exclude.
    */
    exclude: [],

    client: {
      captureConsole: false
    },

    /**
     * List of files / patterns to load in the browser
     *
     * we are building the test environment in ./spec-bundle.js
     */
    files: [
     './src/resources/primeng/primeng.min.css',
     './src/themes/lightness/theme.css',
     './src/resources/font-awesome/css/font-awesome.min.css',
     './src/resources/simple-line-icons/css/simple-line-icons.css',
     './src/resources/jquery/jquery.min.js',
     './src/resources/moment/moment.min.js',
     './src/resources/moment/zh-cn.js',
     './src/resources/mockjs/mock.js',
     './src/resources/chart.js/Chart.bundle.min.js',
      { pattern: './config/spec-bundle.js', watched: false },
      { pattern: './src/assets/**/*', watched: false, included: false, served: true, nocache: false },
      { pattern: './src/resources/**/*', watched: false, included: false, served: true, nocache: false },
      { pattern: './src/themes/**/*', watched: false, included: false, served: true, nocache: false }
    ],

    /**
     * By default all assets are served at http://localhost:[PORT]/base/
     */
    proxies: {
      "/assets/": "/base/src/assets/",
      "/resources/": "/base/src/resources/",
      "/themes/": "/base/src/themes/"
    },

    /**
     * Preprocess matching files before serving them to the browser
     * available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
     */
    preprocessors: { 
      './config/spec-bundle.js': ['coverage', 'webpack', 'sourcemap']
    },

    /**
     * Webpack Config at ./webpack.test.js
     */
    webpack: testWebpackConfig,

    coverageReporter: {
      type: 'in-memory'
    },

    remapCoverageReporter: {
      'text-summary': null,
      json: './coverage/coverage.json',
      html: './coverage/html'
    },

    /**
     * Webpack please don't spam the console when running in karma!
     */
    webpackMiddleware: {
      /**
       * webpack-dev-middleware configuration
       * i.e.
       */
      noInfo: true,
      /**
       * and use stats to turn off verbose output
       */
      stats: {
        /**
         * options i.e.
         */
        chunks: false
      }
    },

    /**
     * Test results reporter to use
     *
     * possible values: 'dots', 'progress'
     * available reporters: https://npmjs.org/browse/keyword/karma-reporter
     */
    reporters: [ 'mocha', 'coverage', 'remap-coverage'],

    /**
     * Web server port.
     */
    port: 9876,

    /**
     * enable / disable colors in the output (reporters and logs)
     */
    colors: true,

    /**
     * Level of logging
     * possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
     */
    logLevel: config.LOG_WARN,

    /**
     * enable / disable watching file and executing tests whenever any file changes
     */
    autoWatch: false,

    /**
     * start these browsers
     * available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
     */
    browsers: [
      'ChromeHeadless'
    ],

    customLaunchers: {
      ChromeTravisCi: {
        base: 'Chrome',
        flags: ['--no-sandbox']
      }
    },

    /**
     * Continuous Integration mode
     * if true, Karma captures browsers, runs the tests and exits
     */
    singleRun: false
  };

  if (process.env.TRAVIS) {
    configuration.browsers = [
      'ChromeTravisCi'
    ];
  }

  config.set(configuration);
};
