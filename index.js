'use strict';
var execa = require('execa');

var defaultMsg = 'Test commit';

function makeDefault(str) {
	if ((typeof str === 'string' && !str.trim()) || str === undefined) {
		return defaultMsg;
	}

	return str;
}

module.exports = function (msg, silent) {
	var args = [];

	msg = makeDefault(msg);

	if (silent === undefined) {
		silent = true;
	}

	if (Array.isArray(msg)) {
		if (msg.length) {
			msg.forEach(function (m) {
				m = makeDefault(m);

				args = [].concat(args, ['-m', m]);
			});
		} else {
			args = ['-m', defaultMsg];
		}
	} else {
		args = ['-m', msg];
	}

	execa.sync('git', ['commit', ...args, '--allow-empty', '--no-gpg-sign']);
};
