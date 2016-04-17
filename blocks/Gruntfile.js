module.exports = function(grunt) {

	require('load-grunt-tasks')(grunt);

	// Project configuration. 
	grunt.initConfig({

	  jshint: {
	    all: ['js/*.js']
	  },


	  uglify: {
	    dist: {
	      files: {
	        'dist/site.min.js': ['js/customizer.js', 'js/navigation.js', 'js/skip-link-focus-fix.js']
	      }
	    }
	  },
	
	  watch: {
	  	dist: {
	  		files: ['js/*.js', '!**/min.*'],
	  		tasks: ['default'],
	  		options: {spawn: false }
	  	}
	  }


	});

	grunt.registerTask('default', ['jshint', 'uglify']);

}