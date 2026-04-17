let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

let n = Number(input[0])

let data = Array(n).fill(0)

let dp = Array(n).fill(0)
for(let i = 1; i <= n; i++){
    data[i - 1] = Number(input[i])
}

dp[0] = data[0]

for(let i = 1; i < n; i++){
    if(i === 1){
        dp[i] = data[i - 1] + data[i]
        continue
    }
    if(i === 2){
        dp[i] = Math.max(data[i - 2] + data[i], data[i - 1] + data[i], data[i - 2] + data[i - 1])
        continue
    }
    
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + data[i], dp[i - 3] + data[i - 1] + data[i])
}

console.log(Math.max(...dp))