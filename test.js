import test from 'ava';
import fn from './';
import shell from 'shelljs';
import stringIncludes from 'string-includes';

shell.config.silent = true;
shell.rm('-rf', 'tmp');
shell.mkdir('tmp');
shell.cd('tmp');
shell.exec('git init');

test('Create dummy commits', t => {
	fn('awesome commit');
	t.ok(stringIncludes(shell.exec('git log').output, 'awesome commit'));

	fn();
	t.ok(stringIncludes(shell.exec('git log').output, 'Test commit'));
});
