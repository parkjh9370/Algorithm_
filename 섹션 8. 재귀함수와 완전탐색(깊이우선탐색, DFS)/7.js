function solution(m, pv, pt) {
    let answer = Number.MIN_SAFE_INTEGER;
    let end = pv.length;
    DFS = (L, sum, time) => {
        if ( time > m ) return
        if ( L === end ) {
            // console.log(sum)
            answer = Math.max(sum, answer)
        }
        else {
            DFS(L+1, sum+pv[L], time+pt[L]);
            DFS(L+1, sum, time);
        }
    }

    DFS(0, 0, 0);

    return answer;
}

let pv = [10, 25, 15, 6, 7];
let pt = [5, 12, 8, 3, 4];

console.log(solution(20, pv, pt));