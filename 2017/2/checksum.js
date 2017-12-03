const sum = require('../../util/sum');

const parseRow = string => string.split('\t').map(value => parseInt(value, 10));
const parseInput = string => string.split('\n').map(parseRow);

const checksum = calcRow => sheet => {
  const rows = parseInput(sheet);
  const values = rows.map(calcRow);
  return sum(values);
};

module.exports = checksum;
