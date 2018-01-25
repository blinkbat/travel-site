var
	gulp = require('gulp'),
	postcss = require('gulp-postcss'),
	autoprefixer = require('autoprefixer'),
	cssvars = require('postcss-simple-vars'),
	nested = require('postcss-nested'),
	cssimport = require('postcss-import'),
	mixins = require('postcss-mixins')
;

gulp.task('styles', function() {
	console.log('\nGulp is watching styles.');

	return gulp.src('./app/assets/styles/styles.css')
		.pipe( postcss([cssimport, mixins, cssvars, nested, autoprefixer]) )
		// handle erroring with emit end instead of full crash
		.on('error', function(errorMsg) {
			console.log(errorMsg.toString);
			this.emit('end');
		})
		.pipe( gulp.dest('./app/temp/styles') );
});