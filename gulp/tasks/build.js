var
	gulp = require('gulp'),
	imagemin = require('gulp-imagemin'),
	del = require('del'),
	usemin = require('gulp-usemin'),
	rev = require('gulp-rev'),
	cssnano = require('gulp-cssnano'),
	uglify = require('gulp-uglify'),
	browsersync = require('browser-sync').create()
;

gulp.task('preview', function() {
	browsersync.init({
		notify: false,
		server: {
			baseDir: "dist"
		},
		browser: "google chrome"
		
	});
});

gulp.task('deleteDist', function() {
	return del("./dist/");
});

gulp.task('copyMiscFiles', ['deleteDist'], function() {
	return gulp.src([
		'./app/**/*',
		// ! means exclude
		'!./app/index.html',
		'!./app/assets/images/**',
		'!./app/assets/styles/**',
		'!./app/assets/scripts/**',
		'!./app/temp',
		'!./app/temp/**'])
	.pipe(gulp.dest('./dist/'));
});

// refresh tasks before build
gulp.task('optimizeImgs', ['deleteDist', 'icons'], function() {
	return gulp.src([
		'./app/assets/images/**/*',
		// ! means exclude
		'!./app/assets/images/icons',
		'!./app/assets/images/icons/**/*'
		])
	.pipe(imagemin({
		progressive: true,
		interlaced: true,
		multipass: true
	}))
	.pipe(gulp.dest('./dist/assets/images/'));
});

// refresh tasks before build
gulp.task('useMin', ['deleteDist', 'styles', 'scripts'], function() {
	return gulp.src('./app/index.html')
	.pipe(usemin({
		css: [function() { return rev() }, function() { return cssnano() } ],
		js:  [function() { return rev() }, function() { return uglify() } ]
	}))
	.pipe(gulp.dest('./dist/'));
});

gulp.task('build', ['deleteDist', 'copyMiscFiles', 'optimizeImgs', 'useMin']);


