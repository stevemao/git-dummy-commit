'use strict';
var shell = require('shelljs');

module.exports = function (msg, silent) {
	var arg = '';
	if (msg === undefined) {
		msg = 'Test commit';
	}

	if (silent === undefined) {
		silent = true;
	}

	if (Array.isArray(msg)) {
		msg.forEach(function (m) {
			arg += '-m"' + m + '" ';
		});
	} else {
		arg = '-m"' + msg + '"';
	}

	shell.exec('git commit ' + arg + ' --allow-empty', {
		silent: silent
	});
};
