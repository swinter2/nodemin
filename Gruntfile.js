module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    compass: {
      dev: {
        options: {
          baseBath: 'app/nodemin/static',
          config: 'app/nodemin/static/config.rb'
        }
      }
    },
    watch: {
      options: { livereload: true },
      // scripts: {
      //   files: 'library/js/src/*.js',
      //   tasks: ['jshint', 'concat', 'uglify', 'copy', 'clean']
      // },
      css: {
        files: 'app/nodemin/static/sass/*.scss',
        tasks: ['compass']
      }
      // html: {
      //   files: '*.html',
      //   tasks: []
      // }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  // grunt.loadNpmTasks('grunt-contrib-jshint');
  // grunt.loadNpmTasks('grunt-contrib-concat');
  // grunt.loadNpmTasks('grunt-contrib-uglify');
  // grunt.loadNpmTasks('grunt-cssc');
  // grunt.loadNpmTasks('grunt-combine-media-queries');
  // grunt.loadNpmTasks('grunt-contrib-cssmin');
  // grunt.loadNpmTasks('grunt-contrib-clean');
  // grunt.loadNpmTasks('grunt-contrib-copy');
  // grunt.loadNpmTasks('grunt-regex-replace');

  grunt.registerTask('default', ['compass']);
}