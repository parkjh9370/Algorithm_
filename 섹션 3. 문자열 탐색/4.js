function solution(str, t){
    let answer = [];
    let p = 1000;

    for ( let x of str) {
        if ( x === t ) {
            p = 0;
            answer.push(p)
        }
        else {
            p++
            answer.push(p)
        }
    }

    p = 1000;

    for (let i = str.length - 1; i >= 0; i--) {
        if (str[i] === t) {
            p = 0;
            answer[i] = 0;
        }
        else {
            p++;
            answer[i] = Math.min(answer[i], p)
        }
    }

    return answer;
}

let str="teachermode";
console.log(solution(str, 'e'));

// function solution(str, t){

//     let firstNum1 = 500
//     let answer1 = [];

//     for ( let i = 0; i < str.length; i++ ) {
//         if ( str[i] !== t ) {
//             firstNum1 ++;
//             answer1.push(firstNum1)          
//         }
//         else if ( str[i] === t ) {
//             firstNum1 = 0
//             answer1.push(firstNum1)
//         }
//     }

//     let firstNum2 = 500
//     let answer2 = [];

//     for ( let i = str.length - 1; i >= 0 ; i-- ) {
//         if ( str[i] !== t ) {
//             firstNum2 ++;
//             answer2.push(firstNum2)          
//         }
//         else if ( str[i] === t ) {
//             firstNum2 = 0
//             answer2.push(firstNum2)
//         }
//     }

//     console.log(answer1)
//     console.log(answer2)

//     // let answer = []
//     // for ( let i = 0; i < answer1.length; i++ ) {
//     //     if ( answer1)

//     // }
// }

// let str="teachermode";
// console.log(solution(str, 'e'));