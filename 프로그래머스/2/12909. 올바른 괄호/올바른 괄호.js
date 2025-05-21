function solution(s){
    var answer = true;
    let stack = [];
    
    let data = s.split('');
    
    for(let i = 0; i < data.length; i++){
        if(data[i] == "("){
            stack.push(data[i]);
        } else {
            if(stack.length <= 0){
                answer = false;
            }
            stack.pop();
        }
    }
    if(stack.length > 0){
        answer = false;
    }
    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    console.log('Hello Javascript')

    return answer;
}