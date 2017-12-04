const _ = require('lodash');

const perfectSquare = x => Number.isInteger(Math.sqrt(x));
const odd = x => x % 2 === 1;
const EMPTY = 0;

function* gridGenerator(getValue = v => v) {
  const grid = [[EMPTY]];
  let r = 0;
  let c = 0;
  let velocity = [0, 1];
  let prevEnd = 0;
  let length = 1;
  let i = 1;

  while (true) {
    const lastValue = getValue(i, grid, [r, c]);
    grid[r][c] = lastValue;
    yield { grid, lastValue };

    if (perfectSquare(i - 1) && odd(i - 1)) {
      velocity = [-1, 0];
      prevEnd = i - 1;
      length = Math.sqrt(i - 1) + 1;
    } else if (i === 1 || i === prevEnd + length * 3) {
      velocity = [0, 1];
    } else if (i === prevEnd + length * 2) {
      velocity = [1, 0];
    } else if (i === prevEnd + length) {
      velocity = [0, -1];
    }

    i++;
    r += velocity[0];
    c += velocity[1];

    if (r < 0) {
      grid.unshift([]);
      r++;
    } else if (!grid[r]) {
      grid.push([]);
    }
    if (c < 0) {
      grid.forEach(row => row.unshift(EMPTY));
      c++;
    }
  }

  return grid;
}

const buildGrid = max => {
  const gen = gridGenerator();
  for (let i = 0; i < max - 1; i++) {
    gen.next();
  }
  return gen.next().value.grid;
};

module.exports = { gridGenerator, buildGrid };
