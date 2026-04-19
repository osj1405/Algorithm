let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

let n = Number(input[0])
let numbers = input[1].split(' ').map((x) => Number(x))

let dp = Array(n).fill(1)

for(let i = 0; i < n; i++){
    let start = numbers[i - 1]
    for(let j = 0; j < i; j++){
        if(numbers[j] < numbers[i]){
            dp[i] = Math.max(dp[i], dp[j] + 1)
        }
    }
}

console.log(Math.max(...dp))