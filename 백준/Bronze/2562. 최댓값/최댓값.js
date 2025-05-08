const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let max = Number(input[0]);
let index = 0;
for(let i = 0; i < 9; i++){
    let data = Number(input[i]);
    if(max <= data){
        max = data;
        index = i;
    }
}

console.log(max);
console.log(index + 1);