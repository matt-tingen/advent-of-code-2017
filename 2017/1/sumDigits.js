const sum = require('../../util/sum');

const sumDigits = getPairIndex => string => {
  const digits = string.split('');
  const values = digits.map((digit, i) => {
    const j = getPairIndex(i, digits.length);
    return digit * +(digit === digits[j]);
  });
  return sum(values);
};

module.exports = sumDigits;
