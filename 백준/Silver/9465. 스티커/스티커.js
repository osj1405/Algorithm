let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

let T = Number(input[0])


let line = 1;

for(let i = 1; i <= T; i++){
    let n = Number(input[line]);
    line++

    let top = [0, ...input[line].split(' ').map(Number)]
    line++

    let bottom = [0, ...input[line].split(' ').map(Number)]
    line++
    
    let dp = Array.from({ length: n + 1 }, () => Array(3).fill(0))
    
    for(let j = 1; j <= n; j++){
        dp[j][0] = Math.max(dp[j - 1][0], dp[j - 1][1], dp[j - 1][2])
        dp[j][1] = Math.max(dp[j - 1][0], dp[j - 1][2]) + top[j]
        dp[j][2] = Math.max(dp[j - 1][0], dp[j - 1][1]) + bottom[j]
    }
    
    console.log(Math.max(...dp[n]))
    
}