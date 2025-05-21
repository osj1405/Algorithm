function solution(s) {
    var answer = '';
    let data = s.split(' ').map(x => Number(x));
    let max = Math.max(...data).toString();
    let min = Math.min(...data).toString();
    answer = min + " " + max;
    return answer;
}