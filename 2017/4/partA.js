const main = require('../../util/main');
const { isValid } = require('./passphrase');

module.exports = exports = passphraseList => {
  const passphrases = passphraseList.split('\n');
  return passphrases.filter(isValid).length;
};

if (!module.parent) {
  main(exports);
}
