const main = require('../../util/main');
const numCycles = require('./numCycles');

module.exports = exports = numCycles;

if (!module.parent) {
  main(exports);
}
