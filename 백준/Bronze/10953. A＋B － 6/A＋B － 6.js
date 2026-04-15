let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

let T = Number(input[0])
let result = []

for(let i = 1; i <= T; i++){
    let [A, B] = input[i].split(",").map((x) => Number(x))
    result.push(A + B)
}

console.log(result.join('\n'))