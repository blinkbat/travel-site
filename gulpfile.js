var
	gulp = require('gulp'),
	watch = require('gulp-watch'),
	postcss = require('gulp-postcss'),
	autoprefixer = require('autoprefixer'),
	cssvars = require('postcss-simple-vars'),
	nested = require('postcss-nested')
;

// gulp default
gulp.task('default', function() {
	console.log('This is yer Gulp task.');
});

gulp.task('html', function() {
	console.log('Gulp is watching HTML.');
});

gulp.task('styles', function() {
	console.log('Gulp is watching styles.');

	return gulp.src('./app/assets/styles/styles.css')
		.pipe( postcss([cssvars, nested, autoprefixer]) )
		.pipe( gulp.dest('./app/temp/styles') );
});

// gulp watch funcs
gulp.task('watch', function() {

	watch('./app/index.html', function() {
		gulp.start('html');
	});

	watch('./app/assets/styles/**/*.css', function() {
		gulp.start('styles');
	});

});

