#!/usr/bin/env node

'use strict';

const assert = require('assert');
const utils = require('../utils.js');

assert(!module.parent);
assert(__dirname === process.cwd());

const target = process.argv[2] || 'latest';
const input = './test-x-index';

const newcomers = [
  'test-output-linux',
  'test-output-macos',
  'test-output-win.exe',
];

const before = utils.filesBefore(newcomers);

utils.pkg.sync([
  '--target',
  `${target}-linux,${target}-macos,${target}-win`,
  '--output',
  'test-output',
  input,
]);

utils.filesAfter(before, newcomers);
