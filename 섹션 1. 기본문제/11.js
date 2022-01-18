function solution(s){
    let answer = 0;

    for ( str of s ) {
        if ( str === str.toUpperCase()) {
            console.log(str.toUpperCase())
            answer = answer + 1
        }
    }

    return answer
}

let str="KoreaTimeGood";
console.log(solution(str));