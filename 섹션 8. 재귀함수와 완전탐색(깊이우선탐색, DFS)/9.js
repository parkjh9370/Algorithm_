/**
 * 다음과 같이 여러 단위의 동전들이 주어져 있을때 거스름돈을 가장 적은 수의 동전으로 교환
 * 해주려면 어떻게 주면 되는가? 각 단위의 동전은 무한정 쓸 수 있다.
 */

// L : 동전을 사용한 갯수
// sum : 최종 거슬러줄 값

function solution(m, arr) {
    let answer = Number.MAX_SAFE_INTEGER;
    let n = arr.length;

    function DFS(L, sum) {
        if ( sum > m ) return;
        if ( L >= answer ) return;
        if ( sum === m ) {
            console.log( L, sum)
            answer = Math.min(answer, L)
        }
        else {
            for ( let i = 0; i < n; i++) {
                DFS(L+1, sum+arr[i]);
            }
        }
    }

    DFS(0, 0)

    return answer;
}

let arr = [1, 2, 5]
let output = solution(15, arr)
console.log(output)