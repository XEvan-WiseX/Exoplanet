var gulp = require('gulp');
var cssnano = require('gulp-cssnano');
require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

const sass = require('gulp-sass')(require('sass'));

gulp.task('sass', function(){
    return gulp.src('src/sass/*.scss')
        .pipe(sass())
        .pipe(cssnano())
        .pipe(gulp.dest('public/css'));
});