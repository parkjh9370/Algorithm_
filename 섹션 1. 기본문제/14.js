function solution(s){
    let answer = s[0]
    // console.log(answer)

    for ( index of s ) {
        if ( answer.length < index.length ) {
            answer = index
        }
    }

    return answer
}

let str=["teacher", "time", "student", "beautiful", "good"];
console.log(solution(str));