const test = require('ava');
const sumDigits = require('./partA');

const testSum = (t, input, expected) => {
  t.is(sumDigits(input), expected);
};
testSum.title = (title, input) => `sum of digits (next) in ${input}`;

test(testSum, '1122', 3);
test(testSum, '1111', 4);
test(testSum, '1234', 0);
test(testSum, '91212129', 9);
