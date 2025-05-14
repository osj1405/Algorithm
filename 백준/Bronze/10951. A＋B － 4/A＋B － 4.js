const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').filter(Boolean);
let result = [];
for(let data of input){
    let [a, b] = data.split(' ').map(x => Number(x));
    let sum = a + b;
    result.push(sum);
}

console.log(result.join('\n'));
