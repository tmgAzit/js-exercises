// LOOPING A TRIANGLE

// let result = '';
// for (i = 0; i < 7; i += 1) {
//   result += '#';
//   console.log(result);
// }

// for (let i = '#'; i.length < 8; i += '#') console.log(i);
// Always define the bindings for the result.

// Find the length of a string

// let abc = 'abc';
// console.log(abc.length);

// FIZZBUZZ

// for (let n = 1; n <= 100; n++) {
//   let output = '';
//   if (n % 3 == 0) output += 'Fizz';
//   if (n % 5 == 0) output += 'Buzz';
//   console.log(output || n);
//   //   console.log(output);
// }

// Chessboard

let size = 8;
let board = '';

for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 == 0) {
      board += ' ';
    } else {
      board += '#';
    }
  }
  board += '\n';
}

console.log(board);
