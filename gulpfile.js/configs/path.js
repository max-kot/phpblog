const pathSrc = './src';
const pathDest = './dist';

const path = {
	src: pathSrc,
	dest: pathDest,

	html: {
		src: pathSrc + '/html/*.html',
		watch: pathSrc + '/html/**/*.html',
		dest: pathSrc,
	},

	styles: {
		src: pathSrc + '/scss/**/*.{scss,sass}',
		watch: pathSrc + '/scss/**/*.{scss,sass}',
		dest: pathSrc + '/css',
	},

	scripts: {
		src: [
			pathSrc + '/js/*.js',
			'!./src/js/main.min.js'
		],
		watch: [
			pathSrc + '/js/**/*.js',
			'!./src/js/main.min.js',
			'!./src/js/main.min.js.LICENSE.txt',
		],
		dest: pathSrc + '/js',
	},

	copy: {
		html: {
			src: pathSrc + '/*.html',
			dest: pathDest,
		},

		css: {
			src: pathSrc + '/css/**/*.css',
			dest: pathDest + '/css',
		},

		js: {
			src: pathSrc + '/js/**/*.js',
			dest: pathDest + '/js',
		},

		all: {
			src: [
				pathSrc + '/**/*.*',
				'!./src/html/**/*.html',
				'!./src/*.html',
				'!./src/css/*.css',
				'!./src/scss/**/*.{sass,scss}',
				'!./src/js/**/*.*',
			],
			dest: pathDest,
		},
	},

	fonts: {
		src: pathSrc + '/fonts/**/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}',
		dest: pathDest + '/fonts',
	},

	img: {
		src: pathSrc + '/img/**/*.{png,jpg,jpeg,gif,svg}',
		dest: pathDest + '/img',
	},

}

module.exports = path;