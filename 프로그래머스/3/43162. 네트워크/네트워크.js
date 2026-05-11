function solution(n, computers) {
    var answer = 0;
    
    let visited = Array.from({ length: n }, () => false)
    
    function dfs(node){
        visited[node] = true
        for(let next = 0; next < n; next++){
            if(computers[node][next] === 1 && !visited[next]){
                dfs(next)
            }
        }        
    }

    for(let i = 0; i < n; i++){
        if(!visited[i]){
            dfs(i)
            answer++
        }
    }  
    
    return answer;
}