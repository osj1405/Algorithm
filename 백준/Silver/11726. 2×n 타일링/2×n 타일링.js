let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

let N = Number(input[0])

let dp = Array(N + 1).fill(0)

dp[0] = 1

for(let i = 1; i <= N; i++){
    if(i === 1){
        dp[i] = dp[i - 1]
    } else {
        dp[i] = (dp[i - 1] + dp[i - 2]) % 10007
    }
}

console.log(dp[N])