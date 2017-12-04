const _ = require('lodash');
const { buildGrid } = require('./buildGrid');

const width = x => Math.floor(Math.log10(x)) + 1;

const printRow = (row, cellWidth) => {
  // Because the rows can be sparse, Array.prototype.map cannot be used.
  const cells = _.map(row, val => _.padStart(val || '', cellWidth));
  console.log(cells.join(' '));
};

const drawGrid = max => {
  const grid = buildGrid(max);
  const cellWidth = width(max);
  grid.forEach(row => printRow(row, cellWidth));
};

module.exports = drawGrid;
