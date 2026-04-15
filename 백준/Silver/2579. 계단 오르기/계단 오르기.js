let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

let n = Number(input[0])

let scores = []
let dp = Array(n + 1).fill(0)

for(let i = 1; i <= n; i++){
    scores.push(Number(input[i]))
}

for(let i = 1; i <= n; i++){
   
   if(i === 1){
       dp[i] = scores[i - 1]
       continue
   }    
   if(i === 2){
       dp[i] = scores[i - 2] + scores[i - 1]
       continue
   }
    if(i === 3){
        dp[i] = dp[i - 2] + scores[i - 1]
    }
    
    dp[i] = Math.max(dp[i - 2] + scores[i - 1], dp[i - 3] + scores[i - 2] + scores[i - 1])
}

console.log(dp[n])