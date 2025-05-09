const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let number = Number(input[0]);
let data = input[1].split('').map(x => parseInt(x));
let result = 0;

for(let i = 0; i < number; i++){
	result += data[i];
}

console.log(result);