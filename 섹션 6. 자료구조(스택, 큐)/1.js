/**
 * 스택 - LIFO(Last In First Out)
 * -> 나중에 들어간 것이 가장 먼저 나옴
 *  
 * 큐 - FIFO(First In First Out)
 * -> 먼저 들어간 것이 가장 먼저 나옴 
 */

function solution(s) {
    let answer = "YES";

    // '(' 기호면 stack에 push
    // ')' 기호면 stack에서 pop
    let stack = [];

    // ')' 기호가 더 많은 case 
    for (let index of s) {
        if ( index === '(') stack.push(index);
        else {
            if (stack.length === 0 ) return "NO"
            stack.pop();
        }
    }

    // '(' 기호가 더 많은 경우 stack에 아직 data가 남아 있음
    if (stack.length > 0) return "NO"

    return answer
}



let a = "(()(()))(()";
console.log(solution(a));