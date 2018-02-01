const gulp = require('gulp');
const clean = require('gulp-rimraf');

gulp.task('default', ['clean'], function() {
    gulp.src(["src/assets/**/*", "!src/**/project files/*"]).pipe(gulp.dest('docs/assets'));
    gulp.src("build/main.min.bundle.js").pipe(gulp.dest('docs/build'));
});

gulp.task('clean', [], function() {
    gulp.src(["docs/build/**/*", "docs/assets/**/*"], { read: false }).pipe(clean());
});