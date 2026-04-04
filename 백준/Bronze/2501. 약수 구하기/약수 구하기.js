let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

let [N, k] = input[0].split(' ').map((x) => Number(x))

let numbers = []

for(let i = 1; i <= N; i++){
    if(N % i === 0) numbers.push(i)
}

if(numbers.length < k) {
    console.log(0)
} else {
    console.log(numbers[k - 1])
}