function solution(s){
    let answer = ''

    for ( index of s ) {
        if ( index === index.toUpperCase()){
            // console.log(index)
            answer = answer + index.toLowerCase()
        }
        else {
            answer = answer + index.toUpperCase()
        }       
    }
    return answer
}

console.log(solution("StuDY"));


// function solution(s){
//     let answer = ''

//     for ( str of s ) {
//         if ( str === str.toUpperCase()) {
//             answer = answer + str.toLowerCase()
//         }
//         else {
//             answer = answer + str.toUpperCase()
//         }
//     }

//     return answer
// }

// console.log(solution("StuDY"));