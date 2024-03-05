const gulp = require("gulp");
const sass = require("gulp-sass");

function compileSass() {
  return gulp
    .src("assets/sass/style.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("assets/css"));
}

function watchFiles() {
  gulp.watch("assets/sass/**/*.scss", compileSass);
}

exports.default = gulp.series(compileSass, watchFiles);
