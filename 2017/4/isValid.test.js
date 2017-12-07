const test = require('ava');
const { isValid } = require('./passphrase');

const testPassphrase = (t, input, expected) => {
  t.is(isValid(input), expected);
};
testPassphrase.title = (title, passphrase, valid) =>
  `passphrase "${testPassphrase}" is ${valid ? '' : 'not '}valid`;

test(testPassphrase, 'aa bb cc dd ee', true);
test(testPassphrase, 'aa bb cc dd aa', false);
test(testPassphrase, 'aa bb cc dd aaa', true);
