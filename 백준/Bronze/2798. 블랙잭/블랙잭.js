let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

let [N, M] = input[0].split(' ').map((x) => Number(x))
let numbers = input[1].split(' ').map((x) => Number(x))

let result = []
for(let i = 0; i < N; i++){
    for(let j = i + 1; j < N; j++){
        for(let k = j + 1; k < N; k++){
            let sum = numbers[i] + numbers[j] + numbers[k]
            if(sum <= M) result.push(sum)
        }
    }
}

console.log(Math.max(...result))