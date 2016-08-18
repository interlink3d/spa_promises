module.exports = function(grunt) {

  grunt.initConfig({
    browserify: {
      '../dist/app.js': ['../js/quiz.js']  // using quiz.js as gateway file
    },
    jshint: {
      options: {
        predef: [ "document", "console" ],
        esnext: true,
        globalstrict: true,
        globals: {"CarLot": true},
        browserify: true
      },
      files: ['../js/**/*.js']
    },
    watch: {
      javascripts: {
        files: ['../js/**/*.js'],
        tasks: ['jshint', 'browserify']
      }
    }
  });

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
  grunt.registerTask('default', ['jshint', 'browserify', 'watch']);
}
