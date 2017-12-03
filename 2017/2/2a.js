const main = require('../../util/main');
const checksum = require('./checksum');

module.exports = exports = checksum(row => Math.max(...row) - Math.min(...row));

if (!module.parent) {
  main(exports);
}
