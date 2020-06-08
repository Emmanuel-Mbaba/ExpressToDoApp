var path = require('path');
var rootPath = path.normalize(__dirname + '/../'); // normalizes to base path

module.exports = {
	development: {
		rootPath: rootPath,
		database: 'mongodb://localhost/expresstodo',
		port: process.env.PORT || 3000
	}
};