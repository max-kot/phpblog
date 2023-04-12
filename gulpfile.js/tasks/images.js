const app = require('../configs/app.js')
const path = require('../configs/path.js');
const set = require('../configs/set.js');

function images() {
	return app.gulp.src(path.img.src)
		.pipe(app.plumber({
			errorHandler: app.notify.onError(error => ({
				title: 'IMAGES',
				message: error.message
			}))
		}
		)) // перехватывает ошибки и заменяет уведомления
		.pipe(app.webp())
		.pipe(app.gulp.dest(path.img.dest))
		.pipe(app.gulp.src(path.img.src))
		.pipe(app.imagemin(set.imagemin))
		.pipe(app.gulp.dest(path.img.dest))

}


module.exports = images;