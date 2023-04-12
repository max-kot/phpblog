const app = require('../configs/app.js');
const path = require('../configs/path.js');
const set = require('../configs/set.js')

function styles() {
	return app.gulp.src(path.styles.src)
		.pipe(app.plumber({
			errorHandler: app.notify.onError(error => ({
				title: 'SCSS',
				message: error.message
			}))
		}
		))
		.pipe(app.sass())
		.pipe(app.gulp.dest(path.styles.dest))
		.pipe(app.rename(set.rename))
		.pipe(app.autoprefixer(set.autoprefixer))
		.pipe(app.cleanCss(set.cleanCss))
		.pipe(app.groupCssMediaQueries())
		.pipe(app.sass(set.sass))
		.pipe(app.gulp.dest(path.styles.dest))
		.pipe(app.browserSync.stream())
}

module.exports = styles;