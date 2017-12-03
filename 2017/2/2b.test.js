const test = require('ava');
const checksum = require('./2b');

const testChecksum = (t, rawInput, expected) => {
  const input = rawInput.trim().replace(/ /g, '\t');
  t.is(checksum(input), expected);
};

test(
  'checksum',
  testChecksum,
  `
5 9 2 8
9 4 7 3
3 8 6 5`,
  9
);
