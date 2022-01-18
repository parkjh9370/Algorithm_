function solution(s, t){
    let answer = 0

    for ( index of s) {
        if ( index === t) {
            answer = answer + 1
        }
    }
    return answer
}

let str="COMPUTERPROGRAMMING";
console.log(solution(str, 'R'));