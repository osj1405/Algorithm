const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let data = input.map(x => Number(x));

let mySet = new Set();

for(let i = 0; i < 10; i++){
	mySet.add(data[i] % 42);
}


console.log(mySet.size); 