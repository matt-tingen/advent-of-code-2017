const test = require('ava');
const numJumps = require('./partA');

const testJumps = (t, input, expected) => {
  t.is(numJumps(input.trim()), expected);
};
testJumps.title = (title, list, num) => {
  const numInstructions = list.split('\n').length;
  return `Instruction set ${
    numInstructions === 1 ? `"${list}"` : `of length ${numInstructions}`
  } requires ${num} jumps`;
};

test(testJumps, '0', 2);
test(testJumps, '1', 1);
test(testJumps, '-1', 1);
test(testJumps, '2', 1);

test(
  testJumps,
  `
0
3
0
1
-3`.trim(),
  5
);
