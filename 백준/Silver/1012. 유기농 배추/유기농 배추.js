let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

let T = Number(input[0])

function dfs(startX, startY, graph, visited, N, M){
    const dx = [-1, 1, 0, 0]
    const dy = [0, 0, -1, 1]

    let stack = [[startX, startY]]
    
    while(stack.length > 0){
        let [x, y] = stack.pop()

        if(visited[x][y]) continue
        
        visited[x][y] = true
        
        for(let i = 0; i < 4; i++){
            let nextX = x + dx[i]
            let nextY = y + dy[i]
            
            if(nextX < 0 || nextY < 0 || nextX >= N || nextY >= M) continue
            if(visited[nextX][nextY]) continue
            if(graph[nextX][nextY] === 0) continue
            
            stack.push([nextX, nextY])
        }
    }
}

let index = 1

for(let t = 0; t < T; t++){
    let result = 0
    
    let [M, N, K] = input[index].split(' ').map((x) => Number(x))
    
    let graph = Array.from({ length: N }, () => Array(M).fill(0))

    for(let i = index; i < index + K; i++){
        let [x, y] = input[i + 1].split(" ").map((x) => Number(x))
    
        graph[y][x] = 1
    }

    let visited = Array.from({ length: N }, () => Array(M).fill(false))


    for(let i = 0; i < N; i++){
        for(let j = 0; j < M; j++){
            if(graph[i][j] === 1 && !visited[i][j]){
                dfs(i, j, graph, visited, N, M)
                result++
            }
        }
    }

    console.log(result)
    index = index + K + 1
}