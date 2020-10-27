const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
var cssmin = require('gulp-cssmin');

exports.default = () => (
    gulp.src('css-dev/style.css')
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(cssmin())
        .pipe(gulp.dest('styles'))
);