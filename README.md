[![NPM version](https://img.shields.io/npm/v/eslint-plugin-caps-on.svg?style=flat)](https://www.npmjs.org/package/eslint-plugin-caps-on)
[![Build Status](https://travis-ci.org/or109/eslint-plugin-caps-on.svg?branch=master)](https://travis-ci.org/or109/eslint-plugin-caps-on)
[![Coverage Status](https://coveralls.io/repos/github/or109/eslint-plugin-caps-on/badge.svg)](https://coveralls.io/github/or109/eslint-plugin-caps-on)

## Installation

```
$ npm i eslint-plugin-caps-on --save-dev
```

## Usage

Add `caps-on` to the `.eslintrc` configuration file.

```js
{
    'plugins': [
        'caps-on'
    ],
    'rules': {
        'caps-on/const-uppercase': 'error'
    }
}
```

## Rule Details


Examples of correct code for this rule with global declaration:
```js
const FOO = 'bar';
const FOO = 42;
const FOO = { BAR: 42, BAZ: 'qux' };
```

Examples of incorrect code for this rule:
```js
const foo = ['bar', 42];
const foo = { bar: 42, baz: 'qux' };
const foo = { BAR: 42, baz: 'qux' };
const foo = 1000 * 60 * 10;
const foo = `42 ${bar}`;
const foo = bar();
const foo = bar ? baz : 42;
const foo = bar.baz();
const foo = bar => baz;
const foo = { bar: baz };
const FOO = { bar: baz };
const foo = [bar, baz, 42];
```