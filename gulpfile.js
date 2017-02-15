var gulp = require('gulp'),
	rename = require('gulp-rename'),
	jshint = require('gulp-jshint'),
	uglify = require('gulp-uglify');

gulp.task('default', function () {
	return gulp.src('src/beaufort-scale.js')
		.pipe(jshint())
		.pipe(jshint.reporter('jshint-stylish'))
		.pipe(jshint.reporter('fail'))
		.pipe(uglify())
		.pipe(rename('beaufort-scale.min.js'))
		.pipe(gulp.dest('dist'));
});
