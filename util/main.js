const process = require('process');

const main = fn => {
  const result = fn(...process.argv.slice(2));
  console.log(result);
};

module.exports = main;
