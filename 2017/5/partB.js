const main = require('../../util/main');
const numJumps = require('./numJumps');

module.exports = exports = numJumps(value => (value >= 3 ? -1 : 1));

if (!module.parent) {
  main(exports);
}
