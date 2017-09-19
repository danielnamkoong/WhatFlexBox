var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('styles', function() {
	gulp.src('autoprefixer/css/styles.css')
		.pipe(autoprefixer())
		.pipe(gulp.dest('build'))
});

gulp.task('watch', function() {
	gulp.watch('autoprefixer/css/styles.css', ['styles']);
});