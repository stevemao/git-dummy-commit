'use strict';

const execa = require('execa');

const defaultMsg = 'Test commit';

const makeDefault = (str = defaultMsg) =>
	typeof str === 'string' && !str.trim() ? defaultMsg : str;

module.exports = (msg, silent) => {
	let args = [];

	msg = makeDefault(msg);

	if (silent === undefined) {
		silent = true;
	}

	if (Array.isArray(msg)) {
		if (msg.length > 0) {
			args = msg
				.map(m => makeDefault(m))
				.reduce((messages, m) => [...messages, '-m', m], args);
		} else {
			args = ['-m', defaultMsg];
		}
	} else {
		args = ['-m', msg];
	}

	execa.sync('git', ['commit', ...args, '--allow-empty', '--no-gpg-sign']);
};
