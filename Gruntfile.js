'use strict';

module.exports = function(grunt) {
    grunt.initConfig({
        less: {
            dev: {
                options: {
                    paths: ['src/less', 'src/less/bootstrap', 'src/less/font-awesome'],
                },
                files: {
                    'client/css/main.css': 'src/less/main.less',
                    'client/css/bootstrap.css': 'src/less/bootstrap.less',
                    'client/css/font-awesome.css': 'src/less/font-awesome.less'
                }
            },
            production: {
                options: {
                    paths: ['client/less'],
                    yuicompress: true
                },
                files: {
                    'client/css/site2.css': 'src/less/site.less'
                }
            }
        },
        jshint: {
            dev: ['client/lib']
        },
        watch: {
            options: {
                livereload: true
            },
            css: {
                files: ['src/less/*.less', 'src/less/bootstrap/*.less'],
                tasks: ['less:dev'],
                options: {
                    interrupt: true
                }
            }/*,
            scripts: {
                files: ['client/js/*.js'],
                tasks: ['livereload'],
                options: {
                    nospawn: true,
                    interrupt: true
                }
            },
            jshint: {
                files: ['client/js/*.js'],
                tasks: ['jshint:dev'],
                options: {
                    interrupt: true
                }
            }*/
        }

    });
    grunt.loadNpmTasks('grunt-contrib-less');
    //grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', 'watch');
};