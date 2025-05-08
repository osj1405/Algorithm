let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let [n1, n2, n3] = input[0].split(' ').map(Number);
let money = 0;
let max = n1 < n2 ? n2 : n1;
max = max < n3 ? n3 : max;

if(n1 == n2 && n2 == n3){
    money = 10000 + 1000 * n1;
} else if(n1 == n2 || n2 == n3){
    money = 1000 + n2 * 100;
} else if(n1 == n3){
    money = 1000 + n1 * 100;
} else {
    money = 100 * max;
}

console.log(money);