# git-dummy-commit [![Build Status](https://travis-ci.org/stevemao/git-dummy-commit.svg?branch=master)](https://travis-ci.org/stevemao/git-dummy-commit)

> Create a dummy commit for testing


## Install

```
$ npm install --save-dev git-dummy-commit
```


## Usage

```js
const gitDummyCommit = require('git-dummy-commit');

gitDummyCommit('unicorns');
//=> created a commit with message "unicorns"
```


## API

### gitDummyCommit(msg)

#### msg

Type: `any` or `array` of `any` Default: `'Test commit'`

Commit message.


## CLI

```
$ npm install --global git-dummy-commit
$ git-dummy-commit unicorns
```


## License

MIT © [Steve Mao](https://github.com/stevemao)
