function solution(triangle) {
    let n = triangle.length
    
    let dp = Array.from({ length: n + 1 }, () => [])
    
    dp[0] = [triangle[0][0]]
    
    for(let i = 1; i < n; i++){
        for(let j = 0; j <= i; j++){
            if(i === 1){
                dp[i][j] = dp[0][0] + triangle[i][j]
                continue
            }
            if(j === 0){
                dp[i][j] = dp[i - 1][0] + triangle[i][j]
                continue
            }
            if(j === i){
                dp[i][j] = dp[i - 1][j - 1] + triangle[i][j]
                continue
            }
            
            dp[i][j] = Math.max(dp[i - 1][j - 1], dp[i - 1][j]) + triangle[i][j]
        }
    }
    
    var answer = Math.max(...dp[n - 1]);
    return answer;
}