function solution(arr){
    let answer = 1;
    let maxNum = arr[0];
   
    for ( let i = 1; i < arr.length; i++) {
        if (maxNum < arr[i]) {
            maxNum = arr[i]
            console.log(maxNum)
            answer ++;
        }
    }

    return answer
}


let arr=[130, 135, 148, 140, 145, 149, 150, 147, 150, 153];
console.log(solution(arr));


// let answer = [arr[0]]

// for ( let i = 0; i < arr.length; i++ ) {
//     for ( let j = i + 1; j < i + 2; j++ ) {
//         if ( arr[i] < arr[j]) {
//             answer.push(arr[j])
//         }
//     }
// }

// return answer