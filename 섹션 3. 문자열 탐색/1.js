function solution(s){
    let answer = "YES";
    s = s.toLowerCase();
    let len = s.length;

    for ( let i = 0; i < Math.floor(len/2); i++) {
        if ( s[i] !== s[len-i-1]) {
            return "NO";
        }
    }

    return answer
}

let str="gooG";
console.log(solution(str));

// function solution(s){
//     let letterArray = str.toLowerCase().split('');
//     let letter = letterArray.join('')

//     let reverseLetter = letterArray.reverse()
//     let reverse = reverseLetter.join('')

//     if ( reverse === letter) {
//         return 'YES'
//     }
//     return 'NO'
// }