const main = require('../../util/main');
const sumDigits = require('./sumDigits');

module.exports = exports = sumDigits((i, length) => (i + 1) % length);
main(exports);
