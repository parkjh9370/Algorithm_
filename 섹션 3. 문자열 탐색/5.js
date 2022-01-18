function solution(s){
    let answer = '';
    let cnt = 1;
    s = s + " ";

    for ( let i = 0; i < s.length - 1; i++ ) {
        if ( s[i] === s[i+1] ) {
            cnt++;
        }
        else {
            answer += s[i]
            if ( cnt > 1) {
                answer += String(cnt);
                cnt = 1;;
            }
        }
    }
    return answer
}

let str="KKHSSSSSSSSSEE";
console.log(solution(str));

/*
function solution(s){
    let answer = ''
    let setNumber = 1;
 
    for (let i = 0; i < s.length; i++ ) {
        if (s[i] !== s[i+1]) {
            answer += s[i]
        }
        else if (s[i] === s[i+1]) {
            setNumber ++
        }
        if (setNumber > 1 && s[i] !== s[i+1]){
            answer += `${setNumber}`
            setNumber = 1
        }
    }       

    return answer
}
*/