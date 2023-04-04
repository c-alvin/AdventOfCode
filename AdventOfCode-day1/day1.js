const fs = require('fs');

let inputData = '';
const elfArray = [];
let largestElf = -Infinity;

fs.readFile('./input.txt', 'utf8', (err, data) => {
  if (err) throw Error;
  inputData = data.toString();
  const initialValue = 0;
  const stringData = inputData
    .split('\n')
    .reduce((accumulator, currentValue) => {
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
  console.log(largestElf);
  console.log(stringData);
  return largestElf;
});
