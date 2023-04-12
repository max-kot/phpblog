const app = require('../configs/app.js');
const path = require('../configs/path.js');
const set = require('../configs/set.js');

function del() {
	return app.del(path.dest)
}

module.exports = del;