const gulp = require('gulp')
const imagemin = require('gulp-imagemin')

module.exports = function imageMinify() {
    return gulp.src('src/assets/**/*.{gif,png,jpg,svg,webp}')
        .pipe(gulp.dest('build/assets'))
}