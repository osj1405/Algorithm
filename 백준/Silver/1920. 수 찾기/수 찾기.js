const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let N = Number(input[0]);

let data1 = new Set(input[1].split(' ').map(x => Number(x)));

let M = Number(input[2]);

let data2 = input[3].split(' ').map(x => Number(x));

for(let i = 0; i < M; i++){
    if(data1.has(data2[i])){
        console.log(1);
    } else {
        console.log(0);
    }
}

