var gulp = require('gulp'),
    cleanCSS = require('gulp-clean-css'),
    htmlmin = require('gulp-htmlmin');

gulp.task('default', function() {
  // place code for your default task here
});

gulp.task('minify-css', function() {
  return gulp.src('src/assets/css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist/assets/css'));
});

gulp.task('minify-html', function() {
  return gulp.src('src/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist'))
});

