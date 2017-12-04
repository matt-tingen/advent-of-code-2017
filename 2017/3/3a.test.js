const test = require('ava');
const dataDistance = require('./3a');

const testDistance = (t, input, expected) => {
  t.is(dataDistance(input), expected);
};
testDistance.title = (title, location, distance) =>
  `testDistance - ${location} -> ${distance}`;

test(testDistance, 1, 0);
test(testDistance, 12, 3);
test(testDistance, 23, 2);
test(testDistance, 1024, 31);
