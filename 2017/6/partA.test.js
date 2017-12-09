const test = require('ava');
const numCycles = require('./partA');

const testCycles = (t, banks, num) => {
  t.is(numCycles(banks.join('\t')), num);
};
testCycles.title = (title, banks, num) =>
  `Memory banks ${banks.join(' ')} require ${num} cycles to repeat`;

test(testCycles, [0], 1);
test(testCycles, [1], 1);
test(testCycles, [1, 1], 2);
test(testCycles, [1, 2], 2);
test(testCycles, [0, 2, 7, 0], 5);
