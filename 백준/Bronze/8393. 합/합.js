let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let number = Number(input[0]);

let sum = parseInt((1 + number) * number / 2);

console.log(sum);