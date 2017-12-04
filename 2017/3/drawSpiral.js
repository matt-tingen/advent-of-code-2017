const _ = require('lodash');

const perfectSquare = x => Number.isInteger(Math.sqrt(x));
const odd = x => x % 2 === 1;

const buildGrid = max => {
  const gridLength = Math.ceil(Math.sqrt(max));
  const grid = _.range(gridLength).map(() => _.fill(Array(gridLength), 0));
  const center = Math.floor(gridLength / 2);
  let r = center;
  let c = center;
  let velocity = [0, 1];
  let prevEnd = 0;
  let length = 1;

  for (let val = 1; val <= max; val++) {
    grid[r][c] = val;

    if (perfectSquare(val - 1) && odd(val - 1)) {
      velocity = [-1, 0];
      prevEnd = val - 1;
      length = Math.sqrt(val - 1) + 1;
    } else if (val === 1 || val === prevEnd + length * 3) {
      velocity = [0, 1];
    } else if (val === prevEnd + length * 2) {
      velocity = [1, 0];
    } else if (val === prevEnd + length) {
      velocity = [0, -1];
    }

    r += velocity[0];
    c += velocity[1];
  }

  return grid;
};

const width = x => Math.floor(Math.log10(x)) + 1;

const printRow = (row, cellWidth) => {
  const cells = row.map(val => _.padStart(val || '', cellWidth));
  console.log(cells.join(' '));
};

const drawGrid = max => {
  const grid = buildGrid(max);
  const cellWidth = width(max);
  grid.forEach(row => printRow(row, cellWidth));
};

module.exports = drawGrid;
