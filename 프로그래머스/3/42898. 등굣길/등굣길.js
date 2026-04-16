function solution(m, n, puddles) {
    let dp = Array.from({ length: n }, () => Array(m).fill(0))
    
    for (const [x, y] of puddles) {
        dp[y - 1][x - 1] = -1
    }
    
    dp[0][0] = 1
    
    for(let i = 0; i < n; i++){
        for(let j = 0; j < m; j++){
            if(i === 0 && j === 0) continue
            if(dp[i][j] === -1) continue
            
            let top = 0
            let left = 0
            
            if (i > 0 && dp[i - 1][j] !== -1) top = dp[i - 1][j]
            if (j > 0 && dp[i][j - 1] !== -1) left = dp[i][j - 1]
            
           dp[i][j] = (top + left) % 1000000007
        }
    }
    
    var answer = dp[n - 1][m - 1]
    return answer;
}