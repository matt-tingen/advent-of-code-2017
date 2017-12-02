const test = require('ava');
const checksum = require('./2a');

const testChecksum = (t, rawInput, expected) => {
  const input = rawInput.trim().replace(/ /g, '\t');
  t.is(checksum(input), expected);
};

test(
  'checksum',
  testChecksum,
  `
5 1 9 5
7 5 3
2 4 6 8`,
  18
);
