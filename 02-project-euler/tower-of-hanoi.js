// The Hanoi Tower problem has a pattern with each increment of n.
// The moves double + 1

const calcHanoiMoves = (moves) => {
  console.log(moves);

  if (moves === 1) return 1;

  const result = 2 * calcHanoiMoves(moves - 1) + 1;
  console.log(result);

  return result;
};

hanoi(8);
