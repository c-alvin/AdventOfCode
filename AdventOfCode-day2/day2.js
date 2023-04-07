const fs = require('fs');

let inputData = '';
let totalPoints = 0;

fs.readFile('./input.txt', 'utf8', (err, data) => {
  if (err) throw err;
  inputData = data.toString();
  const newData = inputData.split(' ').join('').split('\n');
  for (let i = 0; i < newData.length - 1; i++) {
    const match = newData[i];
    const userPick = match[1];
    console.log(match[0]);
    console.log(match[1]);

    if (match[0] === 'A' && userPick === 'X') {
      totalPoints += 4;
    }
    if (match[0] === 'A' && userPick === 'Y') {
      totalPoints += 8;
    }
    if (match[0] === 'A' && userPick === 'Z') {
      totalPoints += 3;
    }
    if (match[0] === 'B' && userPick === 'X') {
      totalPoints += 1;
    }
    if (match[0] === 'B' && userPick === 'Y') {
      totalPoints += 5;
    }
    if (match[0] === 'B' && userPick === 'Z') {
      totalPoints += 9;
    }
    if (match[0] === 'C' && userPick === 'X') {
      totalPoints += 7;
    }
    if (match[0] === 'C' && userPick === 'Y') {
      totalPoints += 2;
    }
    if (match[0] === 'C' && userPick === 'Z') {
      totalPoints += 6;
    }
  }
  console.log(totalPoints);
});

// first column A is rock, b is paper, c if scissors
// second column X is rock, y is paper, z is scissors
// you get 1 for rock, 2 for paper, 3 for scissors if selected in column two
// if you win you get 6 points, 3 for a draw, 0 for loss
