function solution(number) {
    
    var answer = 0;
    for(let i = 1; i <= number; i++){
        if(number % i == 0){
            answer += i;
        }
    }
    
    return answer;
}
