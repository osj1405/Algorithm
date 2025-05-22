function solution(n) {
    var answer = 0;
    let x = 1;
    let rest = 0;
    while(rest != 1){
        rest = n % x;
        if(rest == 1){
            answer = x;
        } else {
            x++;
        }
    }
    return answer;
}