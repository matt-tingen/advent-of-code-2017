const numJumps = input => {
  const instructions = input.split('\n');
  let count = 0;
  let index = 0;

  while (index >= 0 && index < instructions.length) {
    index += instructions[index]++;
    count++;
  }

  return count;
};

module.exports = numJumps;
