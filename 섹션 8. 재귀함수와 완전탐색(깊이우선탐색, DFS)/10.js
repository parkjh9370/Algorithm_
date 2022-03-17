// 순열: 중복을 허락하지 않음 -> 체크배열 필요

function solution(m, arr) {
    let answer = [];

    let tmp = Array.from({length: m}, ()=> 0);
    let ch = Array.from({length: arr.length}, ()=> 0);
    console.log(ch, tmp)

    function DFS(L) {
        if (L === m) {
            answer.push(tmp.slice())
        }
        else {
            for ( let i = 0; i < arr.length; i++ ) {
                // 전에 해당 숫자를 사용했는지 체크
                if ( ch[i] === 0 ) {
                // 사용하지 않았다면 체크하고 가지 뻗기
                    ch[i] = 1
                    tmp[L] = arr[i]
                    DFS(L+1)
                // 사용했다면 체크 풀어주기
                    ch[i] = 0
                }
            }
        }
    }

    DFS(0)
    return answer;
}
  
  let arr = [3, 6, 9];
  console.log(solution(3, arr))