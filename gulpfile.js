'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

sass.compiler = require('node-sass');

gulp.task('sass', function () {
    return gulp.src('source/sass/game.scss')
        .pipe(sass({outputStyles: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('assets/css/'));
});

gulp.task('sass:watch', function () {
    gulp.watch('source/sass/**/*.scss', gulp.series('sass'));
});