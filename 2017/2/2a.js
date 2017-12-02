const main = require('../../util/main');
const checksum = require('./checksum');

module.exports = exports = checksum;

if (!module.parent) {
  main(exports);
}
