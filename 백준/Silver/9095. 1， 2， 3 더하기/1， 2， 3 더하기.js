let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

let T = Number(input[0])

function sumDp(number){
    let count = 0
    
    return count
}

let result = []

for(let i = 1; i <= T; i++){
    let number = Number(input[i])
    
    let dp = Array(number + 1).fill(0)
    
    dp[0] = 1
    
    for(let j = 1; j <= number; j++){
        if(j === 1) {
            dp[j] = dp[0]
            continue
        }
        if(j === 2) {
            dp[j] = dp[j - 1] + dp[0]
            continue
        }
        dp[j] = dp[j - 1] + dp[j - 2] + dp[j - 3]
    }
    
    result.push(dp[number])
}

console.log(result.join('\n'))