const main = require('../../util/main');
const _ = require('lodash');
const numValidPassphrases = require('./numValidPassphrases');

module.exports = exports = numValidPassphrases(passphrase => {
  const words = passphrase.split(' ');
  const sorted = words.map(w => _.sortBy(w).join(''));
  return words.length === _.uniq(sorted).length;
});

if (!module.parent) {
  main(exports);
}
