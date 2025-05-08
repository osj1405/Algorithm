const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let testCase = Number(input[0]);
let result = "";
for(let i = 1; i <= testCase; i++){
    let [a, b] = input[i].split(' ').map(Number);
    result += (a+b);
    result += '\n';
}

console.log(result);