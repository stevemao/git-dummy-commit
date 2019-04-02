#!/usr/bin/env node

'use strict';

const meow = require('meow');
const gitDummyCommit = require('.');

const cli = meow([
	'Usage',
	'  $ git-dummy-commit [msg] [msg] ...',
	'',
	'Examples',
	'  $ git-dummy-commit "unicorns & rainbows"'
]);

gitDummyCommit(cli.input);
