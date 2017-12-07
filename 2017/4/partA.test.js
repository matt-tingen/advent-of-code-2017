const test = require('ava');
const numValid = require('./partA');

const testList = (t, input, expected) => {
  t.is(numValid(input.trim()), expected);
};
testList.title = (title, list, num) =>
  list.includes('\n')
    ? `List has ${num} valid passphrases`
    : `Passphrase "${list}" is ${num ? '' : 'not '}valid`;

test(testList, 'aa bb cc dd ee', 1);
test(testList, 'aa bb cc dd aa', 0);
test(testList, 'aa bb cc dd aaa', 1);
test(
  testList,
  `
aa bb cc dd eee
aa bb cc dd aa
aa bb cc dd aaa`,
  2
);
