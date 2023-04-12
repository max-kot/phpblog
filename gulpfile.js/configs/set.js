const app = require('./app.js');

const set = {

	htmlmin: {
		collapseWhitespace: true, // убирает все пробелы
	},

	sass: {
		outputStyle: 'compressed',
	},

	autoprefixer: {
		overrideBrowserslist: ['last 10 version'],
		grid: true,
	},

	cleanCss: {
		level: 2
	},

	rename: {
		suffix: '.min',
	},

	babel: {
		presets: ['@babel/preset-env'],
	},

	webpack: {
		mode: 'production', // 'development'
		output: {
			filename: 'main.min.js'
		},
		//plugins: [
		//	new app.webpack.ProvidePlugin({
		//		$: "jquery",
		//		jQuery: "jquery"
		//	})
		//],
		module: {
			rules: [
				{
					test: /\.m?js$/,
					exclude: /node_modules/,
					use: {
						loader: 'babel-loader',
						options: {
							presets: [
								['@babel/preset-env', { targets: "defaults" }]
							]
						}
					}
				}
			]
		}
	},

	fonter: {
		formats: ['ttf', 'woff', 'eot', 'svg']
	},

	imagemin: {
		vebose: true, // для просмотра размера
	},
}

module.exports = set;