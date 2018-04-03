module.exports = function(grunt) {
    
    grunt.initConfig({
        uglify: {
            dist: {
                files: {
                    'js/ajax-content.min.js': 'js/ajax-content.js'
                },
                options: {
                    compress: true,
                    report: 'gzip',
                    preserveComments: false
                }
            }
        },
        
        compress: {
            gzip: {
                options: {
                    mode: 'gzip',
                    level: 9
                },
                files: {
                    'js/ajax-content.min.js.gz': 'js/ajax-content.min.js'
                }
            },
            brotli: {
                options: {
                    mode: 'brotli',
                    brotli: {
                        mode: 1,
                        quality: 11
                    }
                },
                files: {
                    'js/ajax-content.min.js.br': 'js/ajax-content.min.js'
                }
            }
        }
    });
    
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-compress');
    
    grunt.registerTask('dist', [
        'uglify:dist',
        'compress:gzip',
        'compress:brotli'
    ]);
}