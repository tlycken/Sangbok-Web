module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    bowercopy: {
      options: {
        clean: true
      },

      foundation: {
        options: {
          destPrefix: 'public'
        },

        files: {
          /*'js/vendor': 'foundation/js/vendor',
          'js/foundation.min.js': 'foundation/js/foundation.min.js',*/
          'js/mm-foundation-tpls.min.js': 'angular-foundation/mm-foundation-tpls.min.js',

          'css/vendor/foundation.css': 'foundation/css/foundation.css',
          'css/vendor/foundation.css.map': 'foundation/css/foundation.css.map',
          'css/vendor/normalize.css': 'foundation/css/normalize.css',
          'css/vendor/normalize.css.map': 'foundation/css/normalize.css.map'
        }
      }
    },

    uglify: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          'public/js/sangbok.js':
            ['src/js/SangbokApp.js',
              'src/js/SangbokHomeCtrl.js',
              'src/js/SangbokSongCtrl.js',
              'src/js/SangbokOfflineCtrl.js']
        }
      }
    },

    cssmin: {
      combine: {
        files: {
          'public/css/vendor/foundation.min.css': ['public/css/vendor/foundation.css'],
          'public/css/sangbok.min.css': ['src/css/sangbok.css']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-bowercopy');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.registerTask('default', ['bowercopy', 'uglify', 'cssmin']);
  grunt.registerTask('compress', ['uglify', 'cssmin']);
};