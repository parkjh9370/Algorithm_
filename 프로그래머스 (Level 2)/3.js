// 큰수만들기
function solution(number, k) {
    const stack = [];

    for ( let i = 0; i < number.length; i++ ) {
        const el = number[i];
        while ( k > 0 && stack[stack.length - 1] < el ) {
            stack.pop();
            k--;
        }
        //  stack.push(el);
        // 동일한 수가 연속되었을 때 모든 수가 푸쉬되는 경우를 제외하기 위해
        // number.length에서 k만큼 제거 된 숫자가 스택안에 존재하는 경우는
        // 더 이상 푸쉬 하지 않는다.
        if (stack.length < number.length - k ) stack.push(el);
    }
    // console.log(k)
    // console.log(stack)
    // console.log(k)
    stack.splice(stack.length - k, k)
    // 위의 for문을 수행했을 때 number - k 개만큼의 수가 stack에 남아야 한다.
    return stack.join('');

}

// console.log(solution("1924", 2)) // "94"
// console.log(solution("1231234", 3)) // "3234"
// console.log(solution("4177252841", 4)) // "775841"
// console.log(solution("55555", 2)) // "555"

// 테스트 케이스에는 없는 예외 케이스
console.log(solution("33335", 3)) // "355"