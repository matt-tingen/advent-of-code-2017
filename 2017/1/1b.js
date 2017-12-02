const main = require('../../util/main');
const sumDigits = require('./sumDigits');

module.exports = exports = sumDigits((i, length) => (i + length / 2) % length);

if (!module.parent) {
  main(exports);
}
