const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let S = input[0];

let alphabet = Array.from({length: 26}, (undefined, x) => x + 97);
let result = [];
for(i of alphabet){
    let data = String.fromCharCode(i);
    result.push(S.indexOf(data));
}

console.log(result.join(' '));