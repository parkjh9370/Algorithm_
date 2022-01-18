function solution(s){
    let answer = "YES"
    s=s.toLowerCase().replace(/[^a-z]/g,'')

    let len = s.length;

    for ( let i = 0; i < Math.floor(len/2); i++ ){
        if ( s[i] !== s[len-1-i]) {
            return 'NO'
        }
    }
    
    return answer
}

let str="found7, time: study; Yduts; emit, 7Dnuof";
console.log(solution(str));