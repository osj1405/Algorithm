let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');


let a = parseInt(input[0]);
let b = parseInt(input[1]);

let one = b % 100 % 10;
let ten = parseInt(b % 100 / 10);
let hund = parseInt(b / 100);

console.log(a * one);
console.log(a * ten);
console.log(a * hund);
console.log(a * b);