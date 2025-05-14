const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let [N, M] = input[0].split(' ').map(x => Number(x));

let array = Array.from({length: N}, (undefined, x) => x+1);

for(let t = 1; t <= M; t++){
    let [i, j] = input[t].split(' ').map(x => Number(x));
    let data = array.slice(i-1, j).reverse();
    array.splice(i-1, j - i + 1, ...data);
}

console.log(array.join(' '));