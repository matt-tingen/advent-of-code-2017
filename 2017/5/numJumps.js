const numJumps = delta => input => {
  const instructions = input.split('\n').map(value => parseInt(value, 10));
  let count = 0;
  let index = 0;

  while (index >= 0 && index < instructions.length) {
    const prevIndex = index;
    index += instructions[index];
    instructions[prevIndex] += delta(instructions[prevIndex]);
    count++;
  }

  return count;
};

module.exports = numJumps;
