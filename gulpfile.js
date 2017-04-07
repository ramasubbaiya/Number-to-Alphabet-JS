var gulp = require('gulp'),
    connect = require('gulp-connect'),
    gp_concat = require('gulp-concat'),
    gp_rename = require('gulp-rename'),
    gp_uglify = require('gulp-uglify');


gulp.task('connect', function() {
    connect.server({
        port: 8282,
        livereload: true,
    });
});

gulp.task('compress', function() {
    return gulp.src(['./app/js/app.js'])
        .pipe(gp_concat('concat.js'))
        .pipe(gulp.dest('dist'))
        .pipe(gp_rename('uglify.js'))
        .pipe(gp_uglify())
        .pipe(gulp.dest('dist'));
})

gulp.task('html', function() {
    gulp.src('./app/*.html')
        .pipe(connect.reload());
});

gulp.task('watch', function() {
    gulp.watch(['./app/*.html'], ['html']);
});

gulp.task('default', ['connect', 'watch', 'compress']);
