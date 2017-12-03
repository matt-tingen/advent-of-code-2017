const _ = require('lodash');
const { combination } = require('js-combinatorics');
const main = require('../../util/main');
const checksum = require('./checksum');

const sortPair = pair => _.sortBy(pair, value => -value);
const isDivisible = ([a, b]) => a % b === 0;

module.exports = exports = checksum(row => {
  const pairs = combination(row, 2);
  const divisiblePair = pairs.map(sortPair).filter(isDivisible)[0];
  const [a, b] = divisiblePair;
  return a / b;
});

if (!module.parent) {
  main(exports);
}
