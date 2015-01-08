module.exports = function ( grunt ) {
    require('load-grunt-tasks')(grunt);
    var config = {
        dest_path: "public/bin"
    }

    var taskConfig = {
        uglify: {
            my_target: {
                files: {
                    '<%= dest_path %>/output.min.js': [
                        'bower_components/jquery/dist/jquery.js',
                        'bower_components/bootstrap/dist/js/bootstrap.js',
                    ]
                }
            }
        },
        cssmin: {
            combine: {
                files: {
                    '<%= dest_path %>/output.min.css': [
                        'bower_components/bootstrap/dist/css/bootstrap.css',
                    ]
                }
            }
        },
        copy: {
            main: {
                files: [
                    {expand: true, src: [
                        'bower_components/jquery/dist/jquery.js',
                        'bower_components/bootstrap/dist/js/bootstrap.js',
                    ], flatten: true, dest: 'public/build/js', filter: 'isFile'},
                    {expand: true, src: [
                        'bower_components/bootstrap/dist/css/bootstrap.css',
                    ], flatten: true, dest: 'public/build/css', filter: 'isFile'},
                ],
            },
        },
        clean: {
            build: ["public/build"],
            bin: ["public/bin"]
        }
    };

    /**
     * Load configurations
     */
    grunt.initConfig( grunt.util._.extend(taskConfig, config));
    grunt.registerTask( 'bin', ['uglify', 'cssmin']);
    grunt.registerTask( 'build', ['copy']);
}
