const _ = require('lodash');

const redistribute = banks => {
  const max = Math.max(...banks);
  const maxIndex = banks.indexOf(max);
  const share = Math.floor(max / banks.length);
  const newBanks = banks.map(
    (blocks, i) => share + (i === maxIndex ? 0 : blocks)
  );

  let i = (maxIndex + 1) % banks.length;
  for (let remainder = max % banks.length; remainder; remainder--) {
    newBanks[i]++;
    i = ++i % banks.length;
  }
  return newBanks;
};

const hasOccurred = (seen, current) =>
  !!_.find(seen, _.partial(_.isEqual, current));

const numCycles = input => {
  let banks = input.split('\t').map(value => parseInt(value, 10));
  const seen = [];
  let count = 0;

  do {
    seen.push(banks);
    banks = redistribute(banks);
    count++;
  } while (!hasOccurred(seen, banks));

  return count;
};

module.exports = numCycles;
