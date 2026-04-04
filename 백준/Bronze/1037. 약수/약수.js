let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

let count = Number(input[0])
let numbers = input[1].split(' ').map((x) => Number(x))
numbers.sort((a, b) => a - b)

let result = 0
if(count === 1){
    result = numbers[0] * numbers[0]
} else{
    result = numbers[0] * numbers[count - 1]
}

console.log(result)