// 순열: 중복을 허락하지 않음 -> 체크배열 필요

function solution(m, arr) {
    let answer = [];

    let tmp = Array.from({length: m}, ()=> 0);
    let ch = Array.from({length: arr.length}, ()=> 0);

    function DFS(L) {
        if (L === m) {
            answer.push(tmp.slice())
        }
        else {
            for ( let i = 0; i < arr.length; i++ ) {
                if ( ch[i] === 0 ) {
                    ch[i] = 1
                    tmp[L] = arr[i]
                    DFS(L+1)
                    ch[i] = 0
                }
            }
        }
    }

    DFS(0)
    return answer;
}
  
  let arr = [3, 6, 9 ];
  console.log(solution(2, arr))