const main = require('../../util/main');
const numJumps = require('./numJumps');

module.exports = exports = numJumps(() => 1);

if (!module.parent) {
  main(exports);
}
