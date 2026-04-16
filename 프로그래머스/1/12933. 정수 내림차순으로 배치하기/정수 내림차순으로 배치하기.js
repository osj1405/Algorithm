function solution(n) {
    let arr = n.toString().split('').map((x) => Number(x))
    arr.sort((a, b) => b - a)
    
    var answer = Number(arr.join(''))
    return answer;
}