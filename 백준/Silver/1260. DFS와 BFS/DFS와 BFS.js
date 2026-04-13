let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

let [N, M, V] = input[0].split(' ').map((x) => Number(x))

let graph = Array.from({ length: N + 1 }, () => [])
for(let i = 1; i <= M; i++){
    let [x, y] = input[i].split(' ').map((x) => Number(x))
    
    graph[x].push(y)
    graph[y].push(x)
}

for(let i = 0; i <= N; i++){
    graph[i].sort((a, b) => a - b)    
}

let visitedDfs = []
let visitedBfs = []

let resultDfs = []
let resultBfs = []
function dfs(start, graph, visited){
    let stack = [start]
    
    while(stack.length > 0){
        const node = stack.pop()
        if(visited[node]) continue
        visited[node] = true
        resultDfs.push(node)
        
        for(let i = graph[node].length - 1; i >= 0; i--){
            const next = graph[node][i]
            if(!visited[next]){
                stack.push(next)
            }
        }
    }
}

function bfs(start, graph, visited){
    const queue = [start]
    let front = 0
    
    visited[start] = true
    resultBfs.push(start)
    
    while(front < queue.length){
        const node = queue[front++]
        
        for(const next of graph[node]){
            if(!visited[next]){
                visited[next] = true
                resultBfs.push(next)
                queue.push(next)
            }
        }
    }
}

dfs(V, graph, visitedDfs)
bfs(V, graph, visitedBfs)

console.log(resultDfs.join(' '))
console.log(resultBfs.join(' '))