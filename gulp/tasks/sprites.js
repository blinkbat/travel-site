var 
	gulp = require('gulp'),
	svgSprite = require('gulp-svg-sprite'),
	rename = require('gulp-rename'),
	del = require('del')
	//svg2png = require('gulp-svg2png')

;

//object literal
var config = {
	shape: {
		spacing: { padding: 1 }
	},
	mode: {
		css: {
			// remove .css from filename
			variables: {
				replaceSvgWithPng: function() {
					return function(sprite, render) {
						return render(sprite).split('.svg').join('.png');
					}
				}
			},
			sprite: 'sprite.svg',
			render: {
				css: {
					template: './gulp/templates/sprite.css'
				}
			}
		}
	}
}

gulp.task('beginClean', function() {
	return del(['./app/temp/sprite', './app/assets/images/sprites']);
});

gulp.task('createSprite', ['beginClean'], function() {
	return gulp.src('./app/assets/images/icons/**/*.svg')
		.pipe(svgSprite(config))
		.pipe(gulp.dest('./app/temp/sprite/'));
});

gulp.task('createPngCopy', ['createSprite'], function() {
	return gulp.src('./app/temp/sprite/css/*.svg')
	//.pipe(svg2png())
	.pipe( gulp.dest('./app/temp/sprite/') );
});


gulp.task('copySpriteGfx', ['createPngCopy'], function () {
	// select {multiple,filetypes} :)
	return gulp.src('./app/temp/sprite/css/**/*.{svg,png}')
	.pipe(gulp.dest('./app/assets/images/sprites'));
});

// [dependency]
gulp.task('copySpriteCss', ['createSprite'], function() {
	return gulp.src('./app/temp/sprite/css/*.css')
		.pipe(rename('_sprite.css'))
		.pipe(gulp.dest('./app/assets/styles/modules'));
});

gulp.task('endClean', ['copySpriteGfx', 'copySpriteCss'], function() {
	return del('./app/temp/sprite');
});

// combine tasks into single
gulp.task('icons', [
	'beginClean', 
	'createSprite', 
	'createPngCopy', 
	'copySpriteCss', 
	'copySpriteGfx', 
	'endClean'
]);

