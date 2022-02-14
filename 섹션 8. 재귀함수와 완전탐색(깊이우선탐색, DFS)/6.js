function solution(c, arr) {
    let answer = Number.MIN_SAFE_INTEGER;
    let end = arr.length;
    DFS = (L, sum) => {
        if ( sum > c ) return
        if ( end === L ) {
            answer = Math.max(answer, sum);
            // else continue;
        }
        else {
            DFS(L+1, sum + arr[L])
            DFS(L+1, sum)
        }
    }

    DFS(0, 0)

    return answer;
}

let arr = [81, 58, 42, 33 ,61]
console.log(solution(259, arr));