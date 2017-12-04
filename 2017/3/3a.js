const main = require('../../util/main');
const dataDistance = require('./dataDistance');

module.exports = exports = dataDistance;

if (!module.parent) {
  main(exports);
}
