const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let subject = Number(input[0]);
let data = input[1].split(' ').map(x => Number(x));

let max = Math.max(...data);
let totalScore = 0;

for(let i = 0; i < subject; i++){
    totalScore += data[i] / max * 100;
}

console.log(totalScore / subject);