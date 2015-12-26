'use strict';
var shell = require('shelljs');

var defaultMsg = 'Test commit';

function makeDefault(str) {
	if ((typeof str === 'string' && !str.trim()) || str === undefined) {
		return defaultMsg;
	}

	return str;
}

module.exports = function (msg, silent) {
	var arg = '';

	msg = makeDefault(msg);

	if (silent === undefined) {
		silent = true;
	}

	if (Array.isArray(msg)) {
		if (msg.length) {
			msg.forEach(function (m) {
				m = makeDefault(m);

				arg += '-m"' + m + '" ';
			});
		} else {
			arg = '-m"' + defaultMsg + '"';
		}
	} else {
		arg = '-m"' + msg + '"';
	}

	shell.exec('git commit ' + arg + ' --allow-empty', {
		silent: silent
	});
};
