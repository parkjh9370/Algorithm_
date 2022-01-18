function solution(arr){         
    let answer = 0;
    let cnt = 0;

    for ( let index of arr ) {
        if ( index === 1 ) {
            cnt ++
            answer += cnt
        }
        else {
            cnt = 0;
        }
    }
    return answer
}

let arr=[1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log(solution(arr));

// function solution(arr){         
//     let sum = 0
//     let partSum = 0
    
//     for ( let i = 0; i < arr.length; i++ ) {
//         if ( arr[i-1] === 1 && arr[i] === 1 ) {
//             partSum ++;
//         }
//         else if ( arr[i] === 1 ) {
//             partSum = 1;
//         }
//         else {
//             partSum = 0;
//         }
//         sum += partSum;
//     }

//     return sum
// }