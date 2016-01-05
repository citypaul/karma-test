// Karma configuration
// Generated on Mon Jan 04 2016 23:07:01 GMT+0000 (GMT)

module.exports = function (config) {

    var path = require('path'),
        root = require('app-root-path').path;

    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',
        frameworks: ['mocha'],
        files: [
            //'dist/*.js',
            path.resolve(root, 'node_modules/phantomjs-polyfill/bind-polyfill.js'),
            path.resolve(root, 'node_modules/react/dist/react-with-addons.js'),
            'test/view/**/*.js',
            'test/view/*_test.js',
            'test/view/**/*_test.js'
        ],


        // list of files to exclude
        exclude: [],

        reporters: ['progress'],


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,

        browsers: ['PhantomJS'],

        singleRun: true,

        concurrency: Infinity,

        preprocessors: {
            // add webpack as preprocessor
            'test/view/*_test.js': ['webpack'],
            'test/view/**/*_test.js': ['webpack']
        },

        webpack: {
            externals: {
                react: 'React'
            }
        },

        webpackMiddleware: {
            noInfo: true
        },

        plugins: [
            'karma-phantomjs-launcher',
            'karma-mocha',
            require("karma-webpack")
        ]
    })
}
