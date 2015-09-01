var gulp = require('gulp');
var util = require('gulp-util');
var watchify = require('watchify');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var browserify = require('browserify');
var uglify = require('gulp-uglify');
var source = require('vinyl-source-stream');
var _ = require('lodash');

// ------------------ Main tasks ----------------- //
gulp.task('watch', ['watch-sass', 'watch-scss']);
gulp.task('default', ['compile-sass', 'compile-scss', 'compress-js']);

// ------------------ Sub tasks ------------------ //
// Javascripts
gulp.task('compress-js', function() {
  return gulp.src('app/assets/javascripts/**')
    .pipe(uglify())
    .pipe(gulp.dest('public/assets/javascripts'));
});

gulp.task('watch-sass', function() {
  gulp.watch('app/assets/stylesheets/**/*.sass', ['compile-sass']);
});

gulp.task('watch-scss', function() {
  gulp.watch('app/assets/stylesheets/**/*.scss', ['compile-scss']);
});

gulp.task('compile-sass', function() {
  gulp.src('app/assets/stylesheets/**/*.sass')
      .pipe(sourcemaps.init())
      .pipe(sass({ indentedSyntax: true, errLogToConsole: true }))
      .pipe(sourcemaps.write())
      .pipe(gulp.dest('public/assets/stylesheets'));
});

gulp.task('compile-scss', function() {
  gulp.src('app/assets/stylesheets/**/*.scss')
      .pipe(sourcemaps.init())
      .pipe(sass({ indentedSyntax: false, errLogToConsole: true }))
      .pipe(sourcemaps.write())
      .pipe(gulp.dest('public/assets/stylesheets'));
});