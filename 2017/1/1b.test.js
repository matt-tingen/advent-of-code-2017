const test = require('ava');
const sumDigits = require('./1b');

const testSum = (t, input, expected) => {
  t.is(sumDigits(input), expected);
};
testSum.title = (title, input) => `sum of digits (half cycle) in ${input}`;

test(testSum, '1212', 6);
test(testSum, '1221', 0);
test(testSum, '123425', 4);
test(testSum, '123123', 12);
test(testSum, '12131415', 4);
