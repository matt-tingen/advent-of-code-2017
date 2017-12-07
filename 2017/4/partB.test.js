const test = require('ava');
const numValid = require('./partB');

const testList = (t, input, expected) => {
  t.is(numValid(input.trim()), expected);
};
testList.title = (title, list, num) =>
  list.includes('\n')
    ? `List has ${num} valid passphrases`
    : `Passphrase "${list}" is ${num ? '' : 'not '}valid`;

test(testList, 'abcde fghij', 1);
test(testList, 'abcde xyz ecdab', 0);
test(testList, 'a ab abc abd abf abj', 1);
test(testList, 'iiii oiii ooii oooi oooo', 1);
test(testList, 'oiii ioii iioi iiio', 0);
test(
  testList,
  `
abcde fghij
abcde xyz ecdab
a ab abc abd abf abj
iiii oiii ooii oooi oooo
oiii ioii iioi iiio`,
  3
);
