import test from 'ava';
import shell from 'shelljs';
import gitDummyCommit from '.';

shell.config.silent = true;

shell.rm('-rf', 'tmp');
shell.mkdir('tmp');
shell.cd('tmp');
shell.exec('git init');

test('Create dummy commits', t => {
	gitDummyCommit('awesome commit');
	t.truthy(shell.exec('git log').stdout.match(/\sawesome commit\s/));

	gitDummyCommit();
	t.truthy(shell.exec('git log').stdout.match(/\sTest commit\s/));

	gitDummyCommit([]);
	t.truthy(
		shell.exec('git log').stdout.match(/\sTest commit[\w\W]*Test commit\s/)
	);

	gitDummyCommit('     ');
	t.truthy(
		shell
			.exec('git log')
			.stdout.match(/\sTest commit[\w\W]*Test commit[\w\W]*Test commit\s/)
	);

	gitDummyCommit('');
	t.truthy(
		shell
			.exec('git log')
			.stdout.match(
				/\sTest commit[\w\W]*Test commit[\w\W]*Test commit[\w\W]*Test commit\s/
			)
	);

	gitDummyCommit(['unicorns', 'rainbows']);
	t.truthy(shell.exec('git log').stdout.match(/\sunicorns\s/));
	t.truthy(shell.exec('git log').stdout.match(/\srainbows\s/));

	gitDummyCommit([' ', 'balloons']);
	t.truthy(
		shell
			.exec('git log')
			.stdout.match(
				/Test commit[\w\W]*Test commit[\w\W]*Test commit[\w\W]*Test commit[\w\W]*Test commit\s/
			)
	);
	t.truthy(shell.exec('git log').stdout.match(/\sballoons\s/));

	gitDummyCommit('";touch a;"');
	t.truthy(shell.exec('git log').stdout.match(/";touch a;"/));
});
