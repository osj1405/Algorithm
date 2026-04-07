let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

let [N, M] = input[0].split(" ").map((x) => Number(x))

let graph = Array.from({ length: N + 1 }, () => [])

for(let i = 1; i <= M; i++){
    let [a, b] = input[i].split(" ").map((x) => Number(x))
    
    graph[a].push(b)
    graph[b].push(a)
}

for(let i = 1; i <= N; i++){
    graph[i].sort((a, b) => a - b)
}

let visited = Array(N + 1).fill(false)
function dfs(start, grpah, visited){
    let stack = [start]

    while(stack.length !== 0){
        let top = stack.pop()
        if(!visited[top]){
            visited[top] = true
            for(next of graph[top]){
                stack.push(next)
            }
        }
    }
}

let result = 0
for(let i = 1; i <= N; i++){
    if(!visited[i]){
        dfs(i, graph, visited)
        result++
    } else {
        continue
    }
}

console.log(result)