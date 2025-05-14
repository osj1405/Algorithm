const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let data = input[0];
let i = Number(input[1]);

console.log(data[i-1]);