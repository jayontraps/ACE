module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jshint: {
      options: {
        eqeqeq: true,
        curly: true,
        undef: false,
        unused: false
      },
      target: {
        src: ['js/*.js']               
      }
    },


  
    sass: {
      options: {
        precision: 5
      },
      dev: {
        options: {
          style: 'nested', // compact, compressed, nested or expanded
          lineNumbers: true
        },
        files: {
          'build/screen.css' : 'sass/screen.scss'
        }
      },
      prod: {
        options: {
          style: 'compressed', // compact, compressed, nested or expanded
          lineNumbers: true
        },
        files: {
          'build/screen.css' : 'sass/screen.scss'
        }
      }
    },


    autoprefixer: {
     options: {
        browsers: ['last 2 versions', 'ie 8', 'ie 9']
      },
      multiple_files: {
        expand: true,
        flatten: true,
        src: 'build/*.css',
        dest: 'build/'
      }
    },   


    uglify: {
      dev: {
        options: {
          beautify: true,
          mangle: false
        },
        files: {
          'build/build.min.js' : ['js/vendor/jquery.bxslider.js', 'js/jquery.fitvids.js', 'js/functions.js', 'js/plugins.js', 'js/main.js']

          // 'build/ace-overlay.js' :  ['js/js.cookie.js', 'js/mana-overlay.js'] 

        },
      },
      prod: {
        files: {
          'build/build.min.js' : ['js/vendor/jquery.bxslider.js', 'js/jquery.fitvids.js', 'js/functions.js', 'js/plugins.js', 'js/main.js'],
          'js/vendor/gumby.min.js' : ['gumby/*.js']

          // 'build/ace-overlay.js' :  ['js/js.cookie.js', 'js/mana-overlay.js'],             

        },
      },
    },


    concat: {
      dist: {
        src: ['js/vendor/waypoints.min.js','js/vendor/gumby.min.js', 'js/vendor/wow.min.js', 'build/build.min.js'],
        dest: 'build/all.js',
      }

      // overlay: {
      //   src: ['js/vendor/TweenLite.min.js','js/vendor/TimelineLite.min.js', 'js/vendor/CSSPlugin.min.js', 'js/vendor/DrawSVGPlugin.min.js', 'build/ace-overlay.js'],
      //   dest: 'build/overlay.min.js',
      // }

    },    

    // Watch options: what tasks to run when changes to files are saved
    watch: {
      options: {
        livereload: true
      },
      css: {
        files: ['sass/**/*.scss'],
        tasks: ['sass:dev', 'autoprefixer']
      },
      js: {
        files: ['js/*.js', '!build/build.min.js'], // Watch for changes in JS files except for script.min.js to avoid reload loops
        tasks: ['jshint', 'uglify:dev', 'concat'] 
      }
    },



    browserSync: {
      dev: {
        bsFiles: {
          src: [
            'build/*.css',
            'build/*.js'
          ],
        },
        options: {
          watchTask: true,
          debugInfo: true,
          logConnections: true,
          notify: true,
          // proxy: appConfig['proxy'],          
          proxy: "localhost/acedance",
          ghostMode: {
            scroll: true,
            links: true,
            forms: true
          }
        }
      }
    },    


  });

  // Load the plugins
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-contrib-concat');  
  grunt.loadNpmTasks('grunt-contrib-jshint');  
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-autoprefixer');


  grunt.registerTask('default', ['jshint', 'sass:dev','uglify:dev','autoprefixer', 'concat', 'browserSync', 'watch']);
  
  grunt.registerTask('production', ['jshint', 'sass:prod','uglify:prod', 'concat', 'autoprefixer']);





};