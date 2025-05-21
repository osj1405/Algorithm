function solution(n) {
    var answer = [];
    answer = n.toString().split('').map(x => Number(x)).reverse();
    return answer;
}