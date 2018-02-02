var
	gulp = require('gulp'),
	watch = require('gulp-watch'),
	browsersync = require('browser-sync').create()
;


gulp.task('html', function() {
	console.log('\nGulp is watching HTML.');
});


// gulp watch funcs
gulp.task('watch', function() {

	browsersync.init({
		notify: false,
		server: {
			baseDir: "app"
		},
		browser: "google chrome"
		
	});

	watch('./app/index.html', function() {
		browsersync.reload();
	});

	watch('./app/assets/styles/**/*.css', function() {
		gulp.start('cssinject');
	});

	watch('./app/assets/scripts/**/*.js', function() {
		gulp.start('scriptsRefresh');
	});

});



gulp.task('cssinject', ['styles'], function() {
	return gulp.src('.app/temp/styles/styles.css')
		.pipe(browsersync.stream());
});

gulp.task('scriptsRefresh', ['scripts'], function() {
	browsersync.reload();
});




