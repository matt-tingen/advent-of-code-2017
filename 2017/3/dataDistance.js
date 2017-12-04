const _ = require('lodash');

const floorToOdd = value => {
  const floor = Math.floor(value);
  return floor % 2 ? floor : floor - 1;
};

const ringIndex = value => (floorToOdd(Math.sqrt(value - 1)) + 1) / 2;
const lastCorner = value => floorToOdd(Math.sqrt(value - 1)) ** 2;

const dataDistance = location => {
  if (location === 1) return 0;
  const ring = ringIndex(location);
  const corner = lastCorner(location);
  const factor = Math.ceil(Math.sqrt(corner) / 2) * 2;
  // Cardinals are values in the same ring which are directly north, east,
  // south, or west of the center. They have a distance equal to the ring index.
  const cardinals = [0.5, 1.5, 2.5, 3.5].map(coeff => corner + coeff * factor);
  // Distance to nearest cardinal in the same ring
  const cardinalDistance = Math.min(
    ...cardinals.map(c => Math.abs(location - c))
  );
  return ring + cardinalDistance;
};

module.exports = dataDistance;
