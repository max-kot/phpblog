const app = require('./configs/app.js');
const path = require('./configs/path.js');
const set = require('./configs/set.js');

// Tasks 

const html = require('./tasks/html.js');
const styles = require('./tasks/styles.js');
const scripts = require('./tasks/scripts.js');
const copy = require('./tasks/copy.js');
const del = require('./tasks/del.js');
const images = require('./tasks/images.js');
const fonts = require('./tasks/fonts.js');

// Watcher
function watcher() {
	app.gulp.watch(path.html.watch, html)
	app.gulp.watch(path.styles.watch, styles)
	app.gulp.watch(path.scripts.watch, scripts)
}

// Сервер
function server() {
	app.browserSync.init({
		server: {
			baseDir: path.src // указываем деректорию
		}
	})
}


// Launch tasks
exports.html = html;
exports.styles = styles;
exports.scripts = scripts;
exports.watcher = watcher;
exports.server = server;
exports.copy = app.gulp.series(
	copy.html,
	copy.css,
	copy.js,
	copy.copyAll,
);
exports.copyAll = copy.copyAll;
exports.del = del;
exports.images = images;
exports.fonts = fonts;


// Launch Modes
const build = app.gulp.series(
	del,
	html,
	styles,
	scripts,
	app.gulp.series(
		copy.html,
		copy.css,
		copy.js,
		copy.copyAll,
	),
	fonts,
	images,
)
const dev = app.gulp.series(
	html,
	styles,
	scripts,
	app.gulp.parallel(
		watcher,
		server,
	)
)


exports.build = build;
exports.dev = dev;

// Launch Default
exports.default = dev;


