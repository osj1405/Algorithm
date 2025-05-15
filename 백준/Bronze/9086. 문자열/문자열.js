const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let T = Number(input[0]);

let summary = [];
for(let i = 1; i <= T; i++){
    let data = input[i];
    let result = data[0] + data[data.length-1];
    console.log(result);
}

