// function solution(s){
//  let answer = ''

//  for ( index of s ) {
//      if ( index === 'A' ) {
//          index = '#'
//      }
//      answer = answer + index
//     }
//  return answer
// }

function solution(s){
    let answer = s
    answer = answer.replace(/A/g, '#')
    return answer
}

let str="BANANA";
console.log(solution(str));

