module.exports = function (grunt) {
    'use strict';
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-react');
    grunt.loadNpmTasks('grunt-webpack');
    grunt.initConfig({
        react: {
            files: {
                expand: true,
                cwd: '.',
                src: [
                    './*.jsx',
                    './!(node_modules)/**/*.jsx'
                ],
                dest: '.',
                ext: '.js'
            }
        },
        pack: {
            this: {
                dest: 'dist',
                cwd: '.'
            }
        },
        karma: { client: { options: { configFile: 'karma.conf.js' } } }
    });
    //grunt.registerTask('build', ['react', 'pack']);
    grunt.registerTask('test', ['karma']);
};