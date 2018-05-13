import test from 'ava';
import shell from 'shelljs';
import fn from './';

shell.config.silent = true;
shell.rm('-rf', 'tmp');
shell.mkdir('tmp');
shell.cd('tmp');
shell.exec('git init');

test('Create dummy commits', t => {
	fn('awesome commit');
	t.truthy(shell.exec('git log').stdout.match(/\sawesome commit\s/));

	fn();
	t.truthy(shell.exec('git log').stdout.match(/\sTest commit\s/));

	fn([]);
	t.truthy(shell.exec('git log').stdout.match(/\sTest commit[\w\W]*Test commit\s/));

	fn('     ');
	t.truthy(shell.exec('git log').stdout.match(/\sTest commit[\w\W]*Test commit[\w\W]*Test commit\s/));

	fn('');
	t.truthy(shell.exec('git log').stdout.match(/\sTest commit[\w\W]*Test commit[\w\W]*Test commit[\w\W]*Test commit\s/));

	fn(['unicorns', 'rainbows']);
	t.truthy(shell.exec('git log').stdout.match(/\sunicorns\s/));
	t.truthy(shell.exec('git log').stdout.match(/\srainbows\s/));

	fn([' ', 'balloons']);
	t.truthy(shell.exec('git log').stdout.match(/Test commit[\w\W]*Test commit[\w\W]*Test commit[\w\W]*Test commit[\w\W]*Test commit\s/));
	t.truthy(shell.exec('git log').stdout.match(/\sballoons\s/));

	fn('";touch a;"');
	t.truthy(shell.exec('git log').stdout.match(/";touch a;"/));
});
