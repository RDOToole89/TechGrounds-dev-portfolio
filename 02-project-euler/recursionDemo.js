const coach = 'Roibin';

function logSingleLetter(string) {
  if (!string) {
    console.log('end of recursion');
    return;
  }

  let firstLetter = string.slice(0, 1);
  let remainingString = string.slice(1);
  console.log(firstLetter);

  logSingleLetter(remainingString);
}

logSingleLetter(coach);
