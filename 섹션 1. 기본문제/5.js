// 배열 최솟값 구하는 내장 함수
// 인자에 배열은 전달할 수 없음, spread 연산자 이용
// Math.min(...arr)


function solution(arr){
    let answer = arr[0]

    for ( let i = 1; i < arr.length; i++ ) {
        if ( arr[i] < answer ) {
            answer = arr[i]
        }
    }

    return answer

}


let arr=[5, 7, 1, 3, 2, 9, 11];
console.log(solution(arr));

let arr1=[3, 7 ,22 , 33, 2, 5];
console.log(solution(arr1));

// function solution(arr){
//     let answer, min = Number.MAX_SAFE_INTEGER;
//     for ( let i = 0; i < arr.length; i++ ) {
//         if (arr[i] < min) {
//             min = arr[i]``
//         }
//     }

//     return answer

// }