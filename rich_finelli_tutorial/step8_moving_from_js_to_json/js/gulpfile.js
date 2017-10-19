//Esto tambien podria hacerlo con express y nodemon
var gulp = require('gulp'),
    connect = require('gulp-connect')

gulp.task('connect', function(){
    connect.server()
    })
gulp.task('default', ['connect']);