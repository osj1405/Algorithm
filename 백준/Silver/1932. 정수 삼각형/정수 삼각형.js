let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

let n = Number(input[0])

let data = Array.from({ length: n }, () => [])

for(let i = 0; i < n; i++){
    data[i] = input[i + 1].split(" ").map((x) => Number(x))
}

let dp = Array.from({ length: n + 1 }, () => [])
dp[0][0] = data[0][0]

for(let i = 1; i < n; i++){
    for(let j = 0; j <= i ; j++){
        if(i === 1){
            dp[i][j] = dp[0][0] + data[i][j]
            continue
        }
        if(j === 0){
            dp[i][j] = dp[i - 1][0] + data[i][j]
            continue
        }
        if(j === i){
            dp[i][j] = dp[i - 1][j - 1] + data[i][j]
            continue
        }
        dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - 1]) + data[i][j]
    }
}

console.log(Math.max(...dp[n - 1]))