const gulp = require('gulp')
const sass = require('gulp-sass')
const browserSync = require('browser-sync')
const sourcemaps = require('gulp-sourcemaps')

module.exports = function styles() {
    return gulp.src('src/styles/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('build/css'))
}