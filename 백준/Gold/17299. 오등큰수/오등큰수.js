const fs = require('fs');

let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let N = Number(input[0]);
let F = [];
let stack = [];
let data = input[1].split(' ').map(x => Number(x));
let result = new Array(N).fill(-1);

data.forEach((x) => {
	F[x] = (F[x] || 0) + 1;
});

for(let i = 0; i < N; i++){
	while(stack.length > 0 && F[data[stack[stack.length-1]]] < F[data[i]] ){
	 let index = stack.pop();
	 result[index] = data[i];
	}
	
	stack.push(i);
}

console.log(result.join(' '));