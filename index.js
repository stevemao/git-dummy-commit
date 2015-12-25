'use strict';
var shell = require('shelljs');

module.exports = function (msg, silent) {
	if (msg === undefined) {
		msg = 'Test commit';
	}

	if (silent === undefined) {
		silent = true;
	}

	shell.exec('git commit -m"' + msg + '" --allow-empty', {
		silent: silent
	});
};
