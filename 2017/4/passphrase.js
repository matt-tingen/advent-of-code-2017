const _ = require('lodash');

const isValid = passphrase => {
  const words = passphrase.split(' ');
  return words.length === _.uniq(words).length;
};

module.exports = {
  isValid
};
