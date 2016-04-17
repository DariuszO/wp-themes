module.exports = function(grunt) {

	// Project configuration. 
	grunt.initConfig({
	  concat: {
	    options: {
	      separator: ';',
	    },
	    dist: {
	      src: ['js/customizer.js', 'js/navigation.js', 'js/skip-link-focus-fix.js'],
	      dest: 'dist/site.min.js',
	    },
	  },

	  uglify: {
	    dist: {
	      files: {
	        'dist/site.min.js': ['dist/site.min.js']
	      }
	    }
	  }

	});



	grunt.loadNpmTasks('grunt-contrib-concat');

	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('default', ['concat', 'uglify']);
}