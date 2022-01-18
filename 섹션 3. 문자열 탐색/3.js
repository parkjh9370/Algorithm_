function solution(str){
    
    let answer = '';

    for ( let x of str) {
        // 문자열안에서 숫자 뽑기 
        // isNaN숫자이면
        if (!isNaN(x)) {
            answer += x;
        } 
    }

    return parseInt(answer);
}

let str="g0en2T0s8eSo3424ft";
console.log(solution(str));

// .replace(/^0/g,'')


// function solution(str){
//     let ansStr = str.replace(/[a-zA-Z]/g,'')

//     return parseInt(ansStr);
// }