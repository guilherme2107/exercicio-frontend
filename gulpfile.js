'use strict';

var gulp    = require('gulp');
var debug   = require('gulp-debug');
var htmlmin = require('gulp-html-minifier');

function buildHtml(done)
{   
    const options = {
        collapseWhitespace: true,
        removeComments    : true
    };
    gulp.src('./src/**/*.html')
        .pipe(htmlmin(options))
        .pipe(gulp.dest('./build'))
    ;

    done();
}

function build(done)
{
    buildHtml(done);
    done();
}

gulp.task('build:html', buildHtml);
gulp.task('watch:html', () => gulp.watch(['./src/**/*.html'], buildHtml));

gulp.task('build', build);