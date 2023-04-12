const app = require('../configs/app.js')
const path = require('../configs/path.js');
const set = require('../configs/set.js');

function fonts() {
	return app.gulp.src(path.fonts.src) // вызываем метод и передаём путь ко всем файлам fonts в исходникаx
		.pipe(app.plumber({
			errorHandler: app.notify.onError(error => ({
				title: 'FONTS',
				message: error.message
			}))
		}
		)) // перехватывает ошибки и заменяет уведомления
		.pipe(app.fonter(set.fonter)) // плагин конвертирует шрифты
		.pipe(app.gulp.dest(path.fonts.dest))
		.pipe(app.ttf2woff2()) // плагин конвертирует шрифты в ttf2 и woff2
		.pipe(app.gulp.dest(path.fonts.dest))
}


module.exports = fonts;