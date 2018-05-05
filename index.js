#!/usr/local/bin/node

const wayz = require('./lib/wayz');
const numberOfArgs = process.argv.length - 2;
const chalk = require('chalk');

// If user does not provide project name.
if (numberOfArgs !== 1) {
  throw chalk.red("ERROR: wayz requires the name of the project as an argument");
}

// Run code.
// module.exports = wayz ?
wayz();