
function solution(arr){
    let answer = arr;
    for ( let i = 0; i< answer.length - 1; i++ ) {
        // idx에 i번째를 저장
        let idx=i;
            for (let j=i+1; j < answer.length; j++ ) {
                // answer[idx]의 수보다 작은 수가 발견되면 idx를 j로 바꿔줌
                if (answer[j] < answer[idx]) {
                    idx=j;
                }
            }
            // 배열 중 가장 작은 인덱스 번호가 idx에 저장되어 있음
        // 숫자 바꿔줌    
        [answer[i], answer[idx]] = [answer[idx], answer[i]];
    }
    return answer;
}

let arr=[13, 5, 11, 7, 23, 15];
console.log(solution(arr));