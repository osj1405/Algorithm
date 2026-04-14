let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

let number = Number(input[0])

if(number > 0){
    let result = 1
    for(let i = 1; i <= number; i++){
        result *= i
    }
    console.log(result)
} else {
    console.log(1)
}