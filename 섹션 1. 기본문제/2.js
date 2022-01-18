// function solution(a, b, c){
//     let newArray = [a, b, c]

//     // console.log(newArray)
//     let align = newArray.sort((a,b)=> a-b )
//     // console.log(align)

//     let sum = Math.pow(align[0],2) + Math.pow(align[1],2)
//     // console.log(sum)
//     let toLow = Math.pow(align[2],2)

//     if ( sum > toLow) {
//         return 'YES'
//     }
//     else {
//         return 'NO'
//     }
// }

function solution(a, b, c){
    let answer = "YES", max;
    let sum = a + b + c;
    if ( a > b) max = a;
    else max = b;
    if( c > max ) max = c;
    if((sum-max) <= max ) answer = "NO"
    
    return answer;
}

console.log(solution(13, 33, 17));