let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

let n = Number(input[0])

let homes = Array.from({ length: n + 1 }, () => [])
for(let i = 1; i <= n; i++){
    homes[i] = input[i].split(' ').map((x) => Number(x))
}

let dp = Array.from({ length: n + 1 }, () => [])
dp[1] = homes[1]

for(let i = 2; i <= n; i++){
    dp[i][0] = homes[i][0] + Math.min(dp[i - 1][1], dp[i - 1][2])
    dp[i][1] = homes[i][1] + Math.min(dp[i - 1][0], dp[i - 1][2])
    dp[i][2] = homes[i][2] + Math.min(dp[i - 1][0], dp[i - 1][1])
}

console.log(Math.min(dp[n][0], dp[n][1], dp[n][2]))