module.exports = function(grunt) {
    grunt.initConfig({

        jade: {
            compile: {
                options: {
                    client: false,
                    pretty: true,
                    flatten: false
                    
                },
                files: [ {
                  expand: true,
                  src: "**/*.jade",
                  dest: "../spaceconcordia.github.io",
                  ext: ".html",
                  cwd: "source/"
                } ]
            }
        },
        watch: {
          script: {
            files: ['**/*.*'],
            tasks:  ['jade'],
            options: {
              spawn: false
            }
            
          }
        }
    });

    grunt.loadNpmTasks("grunt-contrib-jade");
    grunt.loadNpmTasks('grunt-contrib-watch');
};

