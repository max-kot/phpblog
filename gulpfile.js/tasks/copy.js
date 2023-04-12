const app = require('../configs/app.js');
const path = require('../configs/path.js');
const set = require('../configs/set.js');

const copy = {
	html() {
		return app.gulp.src(path.copy.html.src)
			.pipe(app.webpHtml()) // чтобы автоматом ставил тег picture для webp
			.pipe(app.htmlmin(set.htmlmin))
			.pipe(app.gulp.dest(path.copy.html.dest))
	},

	css() {
		return app.gulp.src(path.copy.css.src)
			.pipe(app.webpCss()) // автоматом переводит img в webp
			.pipe(app.gulp.dest(path.copy.css.dest))
	},

	js() {
		return app.gulp.src(path.copy.js.src)
			.pipe(app.gulp.dest(path.copy.js.dest))
	},

	copyAll() {
		return app.gulp.src(path.copy.all.src)
			.pipe(app.gulp.dest(path.copy.all.dest))
	}
}

module.exports = copy;