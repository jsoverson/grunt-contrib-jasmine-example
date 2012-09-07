module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    lint: {
      files: ['src/**/*.js','spec/**/*.js']
    },
    watch: {
      files: ['<config:jasmine.specs>','src/**/*js'],
      tasks: 'jasmine'
    },
    jasmine : {
      src : 'src/**/*.js',
      specs : 'spec/**/*.js'
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        node: true,
        es5: true
      },
      globals: {
        jasmine : false,
        describe : false,
        beforeEach : false,
        expect : false,
        it : false,
        spyOn : false
      }
    }
  });

  grunt.loadNpmTasks('grunt-jasmine-runner');


  // Default task.
  grunt.registerTask('default', 'lint jasmine');

};
