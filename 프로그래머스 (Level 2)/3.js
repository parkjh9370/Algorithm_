// 큰수만들기
function solution(number, k) {
    const stack = [];

    for ( let i = 0; i < number.length; i++ ) {
        const el = number[i];
        while ( k > 0 && stack[stack.length - 1] < el ) {
            stack.pop();
            k--;
        }
        // 동일한 수가 연속되었을 때 모든 수가 푸쉬되는 경우를 제외하기 위해
        // number.length에서 k만큼 제거 된 숫자가 스택안에 존재하는 경우는
        // 더 이상 푸쉬 하지 않는다.
        if (stack.length < number.length - k ) stack.push(el);
    }

    stack.splice(stack.length - k, k)
    return stack.join('');

}

