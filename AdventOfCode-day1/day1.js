const fs = require('fs');

let inputData = '';
const elfArray = [];
let largestElf = -Infinity;
let secondLargestElf = 0;
let thirdLargestElf = 0;
let totalCalories = 0;

fs.readFile('./input.txt', 'utf8', (err, data) => {
  if (err) throw Error;
  inputData = data.toString();
  const initialValue = 0;
  inputData.split('\n').reduce((accumulator, currentValue) => {
    if (currentValue === '') {
      elfArray.push(accumulator);
      currentValue = 0;
      accumulator = 0;
    }

    return parseInt(accumulator) + parseInt(currentValue);
  }, initialValue);

  for (let i = 0; i < elfArray.length; i++) {
    if (elfArray[i] > largestElf) {
      largestElf = elfArray[i];
    }
  }
  elfArray.sort(function (a, b) {
    return b - a;
  });

  for (let i = 0; i < 3; i++) {
    if (i === 0) {
      largestElf = elfArray[i];
    }
    if (i === 1) {
      secondLargestElf = elfArray[i];
    }
    if (i === 2) {
      thirdLargestElf = elfArray[i];
    }
  }

  totalCalories = largestElf + secondLargestElf + thirdLargestElf;
  console.log(totalCalories);
});
