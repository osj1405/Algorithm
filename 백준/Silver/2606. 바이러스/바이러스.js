let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split("\n")

let N = Number(input[0])

let M = Number(input[1])

let graph = Array.from({ length: N + 1 }, () => [])

for(let i = 1; i <= M; i++){
    let [a, b] = input[i + 1].split(" ").map((x) => Number(x))
    
    graph[a].push(b)
    graph[b].push(a)
}

for(let i = 1; i <= N; i++){
    graph[i].sort((a, b) => a - b)
}

let visited = Array(N + 1).fill(false)

let result = []
function dfs(node, graph, visited){
    visited[node] = true
    result.push(node)
    
    for(const next of graph[node]){
        if(!visited[next]){
            visited[next] = true
            dfs(next, graph, visited)
        }
    }
}

dfs(1, graph, visited)
console.log(result.length - 1)