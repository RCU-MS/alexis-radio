//Required Files
var gulp = require('gulp'),
    uglify = require('gulp-uglify');

//Scripts Task	
gulp.task('scripts', function(){
	gulp.src(['app/*.js'])
	.pipe(uglify())
	.pipe(gulp.dest('app/bob'));
});

//Default Task
gulp.task('default', ['scripts']);

// Handle the error
function errorHandler (error) {
  console.log(error.toString());
  this.emit('end');
}