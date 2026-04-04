let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let result = []
for(let i = 0; i < input.length; i++){
    let N = Number(input[i])
    if(N === -1) break
    
    let numbers = []
    for(let j = 1; j < N; j++){
        if(N % j === 0) numbers.push(j)
    }
    let sum = numbers.reduce((a, b) => a + b, 0)
    if(N === sum){
        let text = `${N} = `
        for(let j = 0; j < numbers.length - 1; j++){
            text += `${numbers[j]} + `
        }
        text += `${numbers[numbers.length - 1]}`
        result.push(text)
    } else {
        let text = `${N} is NOT perfect.`
        result.push(text)
    }
}

console.log(result.join('\n'))