let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

let n = Number(input[0])

let data = input[1].toString().split(' ').map((x) => Number(x))

let dp = Array.from({ length: n }, () => [])

dp[0] = data[0]

for(let i = 1; i < n; i++){
    dp[i] = Math.max(data[i], dp[i - 1] + data[i])
}

console.log(Math.max(...dp))