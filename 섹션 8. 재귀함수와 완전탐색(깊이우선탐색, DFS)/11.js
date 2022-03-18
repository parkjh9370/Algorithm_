//팩토리얼
function solution(n) {
    let answer = 1;
    
    function DFS(n) {
      if ( n === 1 ) return 1;
      else return n * DFS(n-1);
      // 5 * DFS(4)
      // 5 * 4 * DFS(3)
      // 5 * 4 * 3 * DFS(2)
      // 5 * 4 * 3 * 2 * DFS(1)
      // 최종적인 리턴으로 실행하는 순서
      // 5 * (4 * (3 * (2 * 1)))
    }
    
    // 최종 값을 answer 변수에 담음
    answer = DFS(n)

    return answer;
  }
  
  console.log(solution(5));