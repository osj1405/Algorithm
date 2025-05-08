let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let number = Number(input[0]);
let sum = 0;

for(i = 0; i < number; i++){
    sum += i + 1;
}

console.log(sum);