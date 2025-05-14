const fs = require('fs');

let data = fs.readFileSync('/dev/stdin').toString().split('\n').map(x => Number(x));

let result = [];

for(let i = 1; i <= 30; i++){
    if(!data.includes(i))
        result.push(i);
}

result.sort(function(a, b){ return a - b;})

for(let i = 0; i < 2; i++){
    console.log(result[i]);
}