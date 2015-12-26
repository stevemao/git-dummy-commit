#!/usr/bin/env node
'use strict';
var meow = require('meow');
var gitDummyCommit = require('./');

var cli = meow([
	'Usage',
	'  $ git-dummy-commit [msg] [msg] ...',
	'',
	'Examples',
	'  $ git-dummy-commit \'unicorns & rainbows\''
]);

gitDummyCommit(cli.input);
