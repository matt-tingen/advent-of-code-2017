const test = require('ava');
const firstLarger = require('./3b');

const testDistance = (t, input, expected) => {
  t.is(firstLarger(input), expected);
};
testDistance.title = (title, location, distance) =>
  `testDistance - ${location} -> ${distance}`;

test(testDistance, 1, 2);
test(testDistance, 10, 11);
test(testDistance, 50, 54);
test(testDistance, 500, 747);
