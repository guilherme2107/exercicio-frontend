'use strict';

var gulp = require('gulp');

gulp.task('teste', function(done){
    console.log('helloworld');
    done();
});



gulp.task('teste2', function(done){
    console.log('teste2');
    done();
});


gulp.task('default', function(done){
    console.log('default');
    done();
});