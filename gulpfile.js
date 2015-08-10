'use strict';

var gulp       = require('gulp'),
    browserify = require('browserify'),
    source     = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    uglify = require('gulp-uglify'),
    jshint = require('gulp-jshint'),
    concat = require('gulp-concat'),
    browserSync = require('browser-sync');


gulp.task('browserify', function() {
    return browserify({ entries: ['app.js'] })
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(buffer())
        .pipe(uglify())
        .pipe(gulp.dest('.'));
});

gulp.task('minify', function () {
    return gulp.src('*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(uglify())
        .pipe(concat('all.js'))
        .pipe(gulp.dest('build'));
});

gulp.task('browser-sync', function () {
   var files = [
      '*.html',
      '*.js'
   ];

   browserSync.init(files, {
      server: {
         baseDir: '.'
      }
   });
});


gulp.task('default', ['browserify','minify', 'browser-sync'] );
