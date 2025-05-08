let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let number = Number(input[0]);

for(let i = 1; i <10; i++){
	console.log(`${number} * ${i} = ${number * i}`);
}