function solution(s){
    let answer = ''

    if ( s.length % 2 === 1 ) {
        return s[(s.length/2) - 0.5]
    }
    else {
        return  s[(s.length/2) - 1] + s[(s.length/2)]
    }
}

console.log(solution("study"));
console.log(solution("good"));