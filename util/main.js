const fs = require('fs');
const path = require('path');
const process = require('process');
const { copy } = require('copy-paste');

const getInputFilename = () => {
  const modulePath = process.argv[1];
  return path.resolve(modulePath, '../input.txt');
};

const getInput = () =>
  fs
    .readFileSync(getInputFilename())
    .toString()
    .trim();

const main = fn => {
  if (process.env.NODE_ENV !== 'test') {
    const input = getInput();
    const result = fn(input);
    console.log(result);
    copy(result);
  }
};

module.exports = main;
