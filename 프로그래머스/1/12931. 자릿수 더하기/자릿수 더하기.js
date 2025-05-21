function solution(n)
{
    var answer = 0;
    let data = n.toString().split('');
    let num = data.map(x => Number(x));
    
    for(let i = 0; i < num.length; i++){
        answer += num[i];
    }
    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    console.log('Hello Javascript')

    return answer;
}