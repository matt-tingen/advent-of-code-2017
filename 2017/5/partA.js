const main = require('../../util/main');
const numJumps = require('./numJumps');

module.exports = exports = numJumps;

if (!module.parent) {
  main(exports);
}
