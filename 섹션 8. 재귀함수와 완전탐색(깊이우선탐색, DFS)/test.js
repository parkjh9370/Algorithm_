function solution(c, arr) {
  // 최댓값 구하는 경우 작은 수로 초기화
  let answer = Number.MIN_SAFE_INTEGER;
  let n = arr.length;

  function DFS(L, sum) {
    if (sum > c) return;
    if (L === n) {
      // console.log(sum)
      answer = Math.max(answer, sum);
    }
    else {
      // 태운 경우
      DFS(L+1, sum+arr[L]);
      // 태우지 않은 경우 
      DFS(L+1, sum);
    }
  }

  DFS(0,0);
  return answer;
}


let arr = [81, 58, 42, 33, 61];
console.log(solution(259,arr));