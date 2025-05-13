const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let [N, M] = input[0].split(' ').map(x => Number(x));
let data = Array.from({ length: N }, () => 0);
for(let r = 1; r <= M; r++){
    let [i, j, k] = input[r].split(' ').map(x => Number(x));
    for(let a=i-1; a <j; a++){
        data[a] = k;
    }
}

console.log(data.join(' '));