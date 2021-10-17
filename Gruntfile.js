module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        // https://github.com/gruntjs/grunt-contrib-uglify/tree/harmony
        uglify: {
            options: {
                compress: {
                  drop_console: true
                },
                mangle: {
                    reserved: ['jQuery']
                }
            },
            my_target: {
                files: {
                    'js/<%= pkg.name %>.min.js': ['js/<%= pkg.name %>.js'],
                    'js/sw-registration.min.js': ['js/sw-registration.js'],
                    'js/jquery.nav.min.js': ['js/jquery.nav.js'],
                    'js/jquery.tagcloud.min.js': ['js/jquery.tagcloud.js'],
                    'sw.min.js': ['sw.js']
                }
            }
        },
        // https://github.com/gruntjs/grunt-contrib-less
        less: {
            expanded: {
                options: {
                    paths: ["css"]
                },
                files: {
                    "css/<%= pkg.name %>.css": "less/<%= pkg.name %>.less",
                }
            },
            minified: {
                options: {
                    paths: ["css"],
                    plugins: [
                        new (require('less-plugin-clean-css'))({
                            level: 2
                        })
                    ]
                },
                files: {
                    "css/<%= pkg.name %>.min.css": [
                        "css/bootstrap.min.css",
                        "less/<%= pkg.name %>.less"
                    ],
                    "css/prism.min.css": "css/prism.css"
                }
            }
        },
        banner: '/*!\n' +
            ' * <%= pkg.title %> v<%= pkg.version %> (<%= pkg.homepage %>)\n' +
            ' * Copyright <%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
            ' */',
        usebanner: {
            dist: {
                options: {
                    position: 'top',
                    banner: '<%= banner %>'
                },
                files: {
                    src: ['css/<%= pkg.name %>.css', 'css/<%= pkg.name %>.min.css', 'js/<%= pkg.name %>.min.js']
                }
            }
        },
        watch: {
            scripts: {
                files: ['js/<%= pkg.name %>.js'],
                tasks: ['uglify'],
                options: {
                    spawn: false,
                },
            },
            less: {
                files: ['less/*.less'],
                tasks: ['less'],
                options: {
                    spawn: false,
                }
            },
        },
    });

    // Load the plugins.
    grunt.loadNpmTasks('grunt-contrib-uglify-es');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-banner');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s).
    grunt.registerTask('default', ['uglify', 'less', 'usebanner']);

};
