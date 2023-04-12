const app = require('../configs/app.js');
const path = require('../configs/path.js');
const set = require('../configs/set.js');

function html() {
	return app.gulp.src(path.html.src)
		.pipe(app.plumber({
			errorHandler: app.notify.onError(error => ({
				title: 'HTML Modules',
				message: error.message
			}))
		}
		))
		.pipe(app.fileInclude())
		.pipe(app.gulp.dest(path.html.dest))
		.pipe(app.browserSync.stream())
}

module.exports = html;