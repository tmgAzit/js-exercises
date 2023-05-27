///////// find minimum number ///////////////

function min(a, b) {
  if (a < b) {
    console.log(`${a} is smaller`);
  } else console.log(`${B} is smaller`);
}

// find the number is even?
function isEven(n) {
  // convert negative number to positive
  if (n < 0) n = Math.abs(n);

  //   base cases
  if (n === 0) return true;
  if (n === 1) return false;

  //   recursive case
  return isEven(n - 2);
}

console.log(isEven(20));

/////////// Bean Counting /////////////

function countBs(string) {
  let count = 0;
  for (i = 0; i < string.length; i++) {
    if (string[i] === 'B') {
      count++;
    }
  }

  return count;
}

console.log(countBs('BananaB'));

///////////// countChar behaves like countBs
function countChar(string, char) {
  let count = 0;
  for (i = 0; i < string.length; i++) {
    if (string[i] === char) {
      count++;
    }
  }
  return count;
}

console.log(countChar('Help', 'H'));

function countBs(string) {
  return countChar(string, 'B');
}

console.log(countBs('BallBatBad'));
