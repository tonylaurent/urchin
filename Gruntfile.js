/**
 * Gruntfile.js
 */

module.exports = function(grunt) {

  // Project configuration
  grunt.initConfig({
    cssmin: {
      target: {
        files: {
          'urchin.min.css': 'urchin.css'
        }
      }
    }
  });

  // Load plugin
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // Default task
  grunt.registerTask('default', ['cssmin']);

};