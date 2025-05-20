const fs = require('fs');

let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let N = Number(input[0]);
let data = input[1].split(' ').map(Number);

let result = new Array(N).fill(-1);
let stack = [];

for (let i = 0; i < N; i++) {
    while (stack.length > 0 && data[stack[stack.length - 1]] < data[i]) {
        let idx = stack.pop();
        result[idx] = data[i];
    }
    stack.push(i);
}

console.log(result.join(' '));
