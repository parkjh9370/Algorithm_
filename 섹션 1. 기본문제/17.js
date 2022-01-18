// function solution(s){
//     let answer = [...s]

//     for ( let i = 0; i < answer.length; i++ ) {
//         for ( let j = i + 1; j < answer.length; j++)
//             if(answer[i] === answer[j]) {
//             answer.splice(j, 1)
//         }
//     }

//     return answer
// }

function solution(s){
    let answer = s.filter((index, i) => {
        // if ( s.indexOf(index) === i ) {
        //     return true;
        // }
        return s.indexOf(index) === i
    })

    return answer

}

let str=["good", "time", "good", "time", "student"];
console.log(solution(str));