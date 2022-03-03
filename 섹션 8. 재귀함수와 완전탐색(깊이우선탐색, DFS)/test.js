function solution(n, r) {
  let answer; 
  // 35행 35열의 2차원 배열
  let dy = Array.from(Array(35), ()=> Array(35).fill(0))
  
  function DFS(n, r) {
    if (dy[n][r] > 0) return dy[n][r]
    if ( n === r || r === 0 ) return 1;
    // 최종적으로 두개 더한 값이 리턴받는 값 더하기
    else return dy[n][r] = DFS(n-1, r-1) + DFS(n-1,r)
  }

  // 메모이제이션 : 재귀를 뻗으며 한 번 얻은 값들을 메모(기억) 해놓고
  // 같은 수가 나오면 그걸 가져다 씀

  answer = DFS(n, r)
  return answer;
}

console.log(solution(5,3));
console.log(solution(33,19));

/**
 * 5C3 = 4C2(내가 뽑혔다고 가정하고 조합) + 4C3(한개가 뽑히고 나머지에서 조합)
 */