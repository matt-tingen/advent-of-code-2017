const sum = require('../../util/sum');
const main = require('../../util/main');

const sumDigits = string => {
  const digits = string.split('');
  const values = digits.map((digit, i) => {
    const j = (i + 1) % digits.length;
    return digit * +(digit === digits[j]);
  });
  return sum(values);
};

if (!module.parent) {
  main(sumDigits);
}

module.exports = sumDigits;
