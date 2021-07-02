const gulp = require('gulp')

const pug2html = require('./pug2html')
const styles = require('./styles')
const script = require('./script')
const imageMinify = require('./imageMinify')

const server = require('browser-sync').create()

function readyReload(cb) {
    server.reload()
    cb()
}

module.exports = function serve(cb) {
    server.init({
        server: 'build',
        notify: false,
        open: true,
        cors: true
    })

    gulp.watch('src/img/*.{gif,png,jpg,svg,webp}', gulp.series(imageMinify, readyReload))
    gulp.watch('src/styles/**/*.scss', gulp.series(styles, cb =>
        gulp.src('build/css').pipe(server.stream()).on('end', cb)))
    gulp.watch('src/html/**/*.pug', gulp.series(pug2html, readyReload))
    gulp.watch('build/*.html').on('change', server.reload)
    gulp.watch('src/js/**/*.js', gulp.series(script, readyReload))

    return cb();
}