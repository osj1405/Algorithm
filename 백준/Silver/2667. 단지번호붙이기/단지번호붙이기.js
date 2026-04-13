let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

let N = Number(input[0])

let graph = []

for(let i = 1; i <= N; i++){
    let data = input[i].split('').map((x) => Number(x))
    
    graph.push(data)
}

const dx = [-1, 1, 0, 0]
const dy = [0, 0, -1, 1]

let visited = Array.from({ length: N }, () => Array(N).fill(false))

function dfs(startX, startY, graph, visited){
    let stack = [[startX, startY]]
    let count = 0
    
    while(stack.length > 0){
        let [x, y] = stack.pop()
        if(visited[x][y]) continue
        visited[x][y] = true
        count++
        
        for(let i = 0; i < 4; i++){
            let nextX = x + dx[i]
            let nextY = y + dy[i]
            
            if(nextX < 0 || nextY < 0 || nextX >= N || nextY >= N) continue
            if(visited[nextX][nextY]) continue
            if(graph[nextX][nextY] === 0) continue
            
            stack.push([nextX, nextY])
        }
    }
    return count
}

let result = []

for(let i = 0; i < N; i++){
    for(let j = 0; j < N; j++){
        if(graph[i][j] === 1 && !visited[i][j]){
            let count = dfs(i, j, graph, visited)
            result.push(count)
        }
    }
}

result.sort((a, b) => a - b)
console.log(result.length)
console.log(result.join('\n'))