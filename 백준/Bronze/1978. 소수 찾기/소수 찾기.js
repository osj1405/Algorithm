let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

let N = Number(input[0])
let numbers = input[1].split(' ').map((x) => Number(x))

let result = 0
for(let i = 0; i < N; i++){
    if(numbers[i] === 1) continue
    let count = 0
    for(let j = 2; j <= numbers[i] - 1; j++){
        if(numbers[i] % j === 0){
            count++
        }
    }
    if(count === 0) result++
}

console.log(result)