"use strict";

// Load plugins
const browsersync = require("browser-sync").create();
const del = require("del");
const gulp = require("gulp");
const merge = require("merge-stream");
var sass = require('gulp-sass');
var htmlImport = require('gulp-html-import');


// BrowserSync
function importHtml(){
  return gulp.src('./index.html')
  .pipe(htmlImport('./components/random/random.html'))
  .pipe(gulp.dest('/build/index.html')); 
}
function browserSync(done) {
  browsersync.init({
    server: {
      baseDir: "./"
    },
    port: 3000
  });
  done();
}
var paths = {
  styles: {
      // By using styles/**/*.sass we're telling gulp to check all folders for any sass file
      src: "./**/*.sass",
      // Compiled files will end up in whichever folder it's found in (partials are not compiled)
      dest: "./"
  }
};
// BrowserSync reload

function browserSyncReload(done) {
  browsersync.reload();
  done();
}
function style() {
  return gulp
      .src(paths.styles.src)
      .pipe(sass())
      .on("error", sass.logError)
      .pipe(gulp.dest(paths.styles.dest));
}
// Clean vendor
function clean() {
  return del(["./vendor/"]);
}

// Bring third party dependencies from node_modules into vendor directory
function modules() {
  // Bootstrap
  var bootstrap = gulp.src('./node_modules/bootstrap/dist/**/*')
    .pipe(gulp.dest('./vendor/bootstrap'));
  // jQuery
  var jquery = gulp.src([
      './node_modules/jquery/dist/*',
      '!./node_modules/jquery/dist/core.js'
    ])
    .pipe(gulp.dest('./vendor/jquery'));
  return merge(bootstrap, jquery);
}

// Watch files
function watchFiles() {
  gulp.watch("./**/*.css", browserSyncReload);
  gulp.watch("./**/*.html", browserSyncReload);
  gulp.watch('./**/*.sass', style)
  gulp.watch('./',importHtml)
}

// Define complex tasks
const vendor = gulp.series(clean, modules);
const build = gulp.series(vendor);
const watch = gulp.series(build, gulp.parallel(watchFiles, browserSync));

// Export tasks
exports.clean = clean;
exports.vendor = vendor;
exports.build = build;
exports.watch = watch;
exports.default = build;
exports.style = style;
exports.importHtml = importHtml;

