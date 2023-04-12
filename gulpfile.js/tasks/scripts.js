const app = require('../configs/app.js');
const path = require('../configs/path.js');
const set = require('../configs/set.js')

function scripts() {
	return app.gulp.src(path.scripts.src)
		.pipe(app.plumber({
			errorHandler: app.notify.onError(error => ({
				title: 'JavaScript',
				message: error.message
			}))
		}
		))
		//.pipe(app.concat('main.min.js'))
		//.pipe(app.babel(set.babel))
		.pipe(app.webpackStream(set.webpack))
		.pipe(app.gulp.dest(path.scripts.dest))
		.pipe(app.browserSync.stream())
}

module.exports = scripts;