/**
 * 조합수(메모이제이션)
 * - 프로그래밍에서 반복되는 결과를 메모리에 저장 해놓고 다음에 같은 
 * 결과가 나올 때 다시 계산할 필요없이 빨리 실행 하는 기법이다
 */

// Memoization
function solution(n, r) {
  let answer;
  let dy = Array.from(Array(35), () => Array(35).fill(0));
  // 35행 35열의 배열 만들어짐
  // 문제에서 주어진 n, r 의 범위에 따라 설정 

  function DFS(n, r) {
    // 기록이 되었다면 초기화한 0보다 더 큰 수가 저장
    if (dy[n][r] > 0) return dy[n][r]
    // console.log(dy)
    if ( n === r || r === 0 ) return 1
    // dy배열에 리턴받는 값을 기록
    else return dy[n][r] = DFS(n-1, r-1) + DFS(n-1, r);
  }
 
  answer = DFS(n, r)
  return answer;
}

console.log(solution(10, 3));

// native solution
// function solution(n, r) {
//   let answer;

//   function DFS(n, r) {
//     if ( n === r || r === 0 ) return 1
//     else return DFS(n-1, r-1) + DFS(n-1, r);
//   }

//   answer = DFS(n, r)
//   return answer;
// }

