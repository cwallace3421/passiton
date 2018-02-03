const gulp = require('gulp');
const clean = require('gulp-rimraf');

gulp.task('default', ['clean'], function() {
    gulp.src(["src/assets/**/*", "!src/**/project files/*"]).pipe(gulp.dest('docs/assets'));
    gulp.src("build/main.bundle.min.js").pipe(gulp.dest('docs/js'));
});

gulp.task('clean', [], function() {
    gulp.src(["docs/js/**/*", "docs/assets/**/*"], { read: false }).pipe(clean());
});