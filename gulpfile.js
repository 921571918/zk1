var gulp = require('gulp');
var mincss = require('gulp-clean-css');
var htmlmin = require('gulp-htmlmin');
var minjs = require('gulp-uglify');
gulp.task('htmlMin', function() {
    gulp.src('src/*.html')
        .pipe(htmlmin(options))
        .pipe(gulp.dest('dist'))
});
gulp.task('minJS', function() {
    gulp.src('src/js/*.js')
        .pipe(minjs())
        .pipe(gulp.dest('dist/js'))

});
gulp.task('minCss', function() {
    gulp.src('src/css/*.css')
        .pipe(mincss())
        .pipe(gulp.dest('dist/css'))

});

gulp.task('default', ['minCss', 'htmlMin', 'minJS']);