const { cartesianProduct } = require('js-combinatorics');
const main = require('../../util/main');
const sum = require('../../util/sum');
const { gridGenerator } = require('./buildGrid');

const getCell = (grid, [r, c]) => (grid[r] && grid[r][c]) || 0;

const adjacentCells = (grid, [r, c]) => {
  // This will include [0, 0], the current cell, but it's value will be falsy.
  const offsets = cartesianProduct([0, -1, 1], [0, -1, 1]).toArray();
  const coords = offsets.map(([offsetR, offsetC]) => [
    r + offsetR,
    c + offsetC
  ]);
  const cells = coords.map(pos => getCell(grid, pos));
  return cells;
};

module.exports = exports = threshold => {
  const generator = gridGenerator(
    (i, grid, position) => (i === 1 ? 1 : sum(adjacentCells(grid, position)))
  );

  let lastGen = { lastValue: 0 };
  while (lastGen.lastValue <= threshold) {
    lastGen = generator.next().value;
  }

  return lastGen.lastValue;
};

if (!module.parent) {
  main(exports);
}
