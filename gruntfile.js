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
    });

    grunt.loadNpmTasks("grunt-contrib-jade");
};