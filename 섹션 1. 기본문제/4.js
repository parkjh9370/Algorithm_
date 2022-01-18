function solution(n){
    let answer = 0
    let num = 0
    while ( num <= n ) {
        answer = answer + num
        num = num + 1
    }

    return answer
}

console.log(solution(10));
console.log(solution(6));