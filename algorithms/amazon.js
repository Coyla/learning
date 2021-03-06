// const test = require('ava');

// IMPORT LIBRARY PACKAGES NEEDED BY YOUR PROGRAM
// SOME FUNCTIONALITY WITHIN A PACKAGE MAY BE RESTRICTED
// DEFINE ANY FUNCTION NEEDED
// FUNCTION SIGNATURE BEGINS, THIS FUNCTION IS REQUIRED
function cellCompete(states, days) {
  // WRITE YOUR CODE HERE
  let nextDays = JSON.parse(JSON.stringify(states));
  for (let i = 0; i < days; i++) {
    nextDays = getNextDay(nextDays);
    console.table(nextDays);
  }

  return nextDays;
}
// FUNCTION SIGNATURE ENDS

function isSameStatus(left, right) {
  return left === right;
}

function getNextDay(states) {
  const nextDayStates = [];

  for (let i = 0; i < states.length; i++) {
    const left = i === 0 ? 0 : states[i - 1];
    const right = i === states.length - 1 ? 0 : states[i + 1];
    if (isSameStatus(left, right)) {
      nextDayStates.push(0);
    } else {
      nextDayStates.push(1);
    }
  }

  return nextDayStates;
}


function generalizedGCD(num, arr) {
  const sortedArr = arr.sort((a, b) => { return b - a; });
  const divides = getAllDives(sortedArr[0]);

  for (const divide of divides) {
    if (isDivideAll(arr, divide)) {
      return divide;
    }
  }
  return 1;
}

function isDivideAll(liste, div) {
  for (const i of liste) {
    if (i % div !== 0) {
      console.log(i, div);
      return false;
    }
  }
  return true;
}

function getAllDives(number) {
  debugger;
  const result = [];
  for (let i = number; i > 0; i--) {
    if (number % i === 0) {
      result.push(i);
    }
  }

  return result;
}


cellCompete([1, 0, 0, 0, 0, 1, 0, 0], 1);
generalizedGCD(5, [2, 4, 6, 8, 10]);
