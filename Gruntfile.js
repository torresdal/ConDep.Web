'use strict';

module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        browserify: {
            js: {
                // A single entry point for our app
                src: 'src/js/app.js',
                // Compile to a single file to add a script tag for in your HTML
                dest: 'client/dist.js',
                options: {
                    debug: true,
                    transform: ['hbsfy'],
                    alias: [
                        "./src/js/views/admin/common/modal/modal_view:modal"
                    ],
                    shim: {
                        jquery: {
                            path: 'node_modules/jquery/dist/jquery.js',
                            exports: '$'
                        },
                        underscore: {
                            path: 'node_modules/underscore/underscore.js',
                            exports: '_'
                        },
                        backbone: {
                            path: 'node_modules/backbone/backbone.js',
                            exports: 'Backbone',
                            depends: {
                                underscore: 'underscore',
                                jquery: '$'
                            }
                        },
                        'backbone.relational': {
                            path: 'node_modules/backbone-relational/backbone-relational.js',
                            exports: 'BackboneRelational',
                            depends: {
                                backbone: 'Backbone'
                            }
                        },
                        'backbone.wreqr': {
                            path: 'node_modules/backbone.wreqr/lib/backbone.wreqr.js',
                            exports: 'Backbone.Wreqr',
                            depends: {
                                backbone: 'Backbone'
                            }
                        },
                        'backbone.marionette': {
                            path: 'node_modules/backbone.marionette/lib/backbone.marionette.js',
                            exports: 'Marionette',
                            depends: {
                                jquery: '$',
                                backbone: 'Backbone',
                                underscore: '_'
                            }
                        },
                        'backbone.stickit': {
                            path: 'node_modules/backbone.stickit/backbone.stickit.js',
                            exports: null,
                            depends: {
                                jquery: '$',
                                underscore: '_',
                                backbone: 'Backbone'
                            }
                        },
                        'backbone.syphone': {
                            path: 'bower_components/backbone.syphon/lib/backbone.syphon.js',
                            exports: 'Backbone.Syphon',
                            depends: {
                                jquery: '$',
                                underscore: '_',
                                backbone: 'Backbone'
                            }
                        },
                        bootstrap: {
                            path: 'bower_components/bootstrap/dist/js/bootstrap.min.js',
                            exports: 'Bootstrap',
                            depends: {
                                jquery: '$'
                            }
                        }
                    }
                }
            },
        },
        less: {
            dev: {
                options: {
                    paths: [
                        'src/less', 
                        'src/less/bootstrap', 
                        'src/less/font-awesome'
                    ],
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
                files: ['src/less/*.less', 'src/less/bootstrap/*.less', 'src/less/font-awesome/*.less'],
                tasks: ['less:dev'],
                options: {
                    interrupt: true
                }
            },
            browserify: {
                files: ["src/js/**/*.js", "src/js/**/*.hbs"],
                tasks: ["browserify"]
            }
            /*,
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
    grunt.loadNpmTasks('grunt-browserify');
    //grunt.loadNpmTasks('grunt-browserify-bower');
    grunt.registerTask('default', 'watch');
};