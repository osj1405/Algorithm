let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let N = input.length

let result = []
for(let i = 0; i < N; i++){
    let numbers = input[i].split(' ').map((x) => Number(x))
    numbers.sort((a, b) => b - a)
    
    if(numbers[0] === 0) break

    let match = ""
    if(numbers[0] >= numbers[1] + numbers[2]){
        match = "Invalid"
        result.push(match)
        continue
    }
    
    if(numbers[0] === numbers[1] && numbers[1] === numbers[2]){
        match = "Equilateral"
    } else if(numbers[0] === numbers[1] || numbers[1] === numbers[2]){
        match = "Isosceles"
    } else {
        match = "Scalene"
    }
    result.push(match)
}

console.log(result.join('\n'))

