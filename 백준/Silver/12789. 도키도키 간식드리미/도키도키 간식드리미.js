let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split("\n")

let N = Number(input[0])
let numbers = input[1].split(' ').map((x) => Number(x))

let stack = []

let result = []


while(numbers.length !== 0 || stack.length !== 0){
    if(stack.length === 0 && numbers.length > 0){
        if(numbers[0] === result.length + 1){
            result.push(numbers[0])
            numbers.splice(0, 1)
        } else {
            stack.push(numbers[0])
            numbers.splice(0, 1)
        }
    } else if(stack.length > 0 && numbers.length > 0){
        if(stack[stack.length - 1] > numbers[0]){
            if(numbers[0] === result.length + 1){
                result.push(numbers[0])
                numbers.splice(0, 1)
            } else {
                stack.push(numbers[0])
                numbers.splice(0, 1)
            }
        } else {
            if(stack[stack.length - 1] === result.length + 1){
                result.push(stack[stack.length - 1])
                stack.pop()
            } else {
                console.log('Sad')
                return
            }
        }
    } else if(numbers.length === 0 && stack.length > 0){
        if(stack[stack.length - 1] === result.length + 1){
            result.push(stack[stack.length - 1])
            stack.pop()
        } else {
            console.log('Sad')
            return
        }
    } else {
        console.log('Nice')
    }
}

console.log('Nice')