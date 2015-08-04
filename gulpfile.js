/* Gulpfile
add uglify,
pipe to dest output
*/

var gulp = require('gulp'),
   uglify = require('gulp-uglify'),
   browserSync = require('browser-sync');

/* Run browser-sync before default */
gulp.task('default', ['browser-sync'], function () {
   gulp.src('src/*.js')
      .pipe(uglify())
      .pipe(gulp.dest('dest/'))
});


gulp.task('browser-sync', function () {
   var files = [
      'src/*.html',
    //  'app/assets/css/**/*.css',
    //  'app/assets/imgs/**/*.png',
      'src/*.js'
   ];

   browserSync.init(files, {
      server: {
         baseDir: './src'
      }
   });
});
