function solution(s) {
    let answer;
    let stack = [];
    for (let x of s) {
        if (x=== ")") {
            // stack.pop() === '(' 만날때가지 반복하다가 스탑
            while (stack.pop() !== '(');
        }
        else stack.push(x)
    }
    // console.log(stack)
    answer = stack.join(',')
    return answer
}


let str = "(A(BC)D)EF(G(H)(IJ)K)LM(N)"
console.log(solution(str))
