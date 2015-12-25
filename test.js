import test from 'ava';
import fn from './';
import shell from 'shelljs';

shell.config.silent = true;
shell.rm('-rf', 'tmp');
shell.mkdir('tmp');
shell.cd('tmp');
shell.exec('git init');

test('Create dummy commits', t => {
	fn('awesome commit');
	t.ok(shell.exec('git log').output.match(/\sawesome commit\s/));

	fn();
	t.ok(shell.exec('git log').output.match(/\sTest commit\s/));

	fn(['unicorns', 'rainbows']);
	t.ok(shell.exec('git log').output.match(/\sunicorns\s/));
	t.ok(shell.exec('git log').output.match(/\srainbows\s/));
});
