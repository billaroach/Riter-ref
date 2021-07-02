const gulp = require('gulp')

const pug2html = require('./gulp/tasks/pug2html')
const serve = require('./gulp/tasks/serve')
const styles = require('./gulp/tasks/styles')
const script = require('./gulp/tasks/script')
const imageMinify = require('./gulp/tasks/imageMinify')


module.exports.start = gulp.series(pug2html)

const dev = gulp.parallel(pug2html, styles, script, imageMinify)

const build = gulp.series(dev)

module.exports.start = gulp.series(build, serve)