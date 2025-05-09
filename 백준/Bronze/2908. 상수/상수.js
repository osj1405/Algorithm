const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let number = input[0].split(' ');
let num1 = number[0].split('').reverse().join('');
let num2 = number[1].split('').reverse().join('');

let a = Number(num1);
let b = Number(num2);

console.log(Math.max(a, b));
