function solution(n, arr) {
  let answer = 0;
  // 0번 인덱스는 비워두고 1번 인덱스 부터 사용
  let graph = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));
  // node 방문 여부 체크 배열
  let ch = Array.from({ length: n + 1 }, () => 0); // [ 0, 0, 0, 0, 0, 0 ]

  let path = [];

  // 간선 정보 그래프에 반영
  for (let [a, b] of arr) {
    graph[a][b] = 1;
  }

  function DFS(v) {
    // v가 종착점인 5에 도달했을 때
    if (v === n) {
      answer++;
      console.log(path);
    } else {
      for (let i = 1; i <= n; i++) {
        // v정점에서 i라는 정점으로 갈 수 있는지 확인, 이미 방문여부 확인(0이여야 방문 가능)
        if (graph[v][i] === 1 && ch[i] === 0) {
          ch[i] = 1; //방문했으면 check
          path.push(i);
          DFS(i); // node 가 뻗어 나가는 만큼 콜 스택에 쌓임
          ch[i] = 0; // 1 체크되어 있는거 정점 연결된 곳 까지 초기화
          path.pop();
        }
      }
    }
  }

  path.push(1); //출발점 path = [1]

  ch[1] = 1; //1은 방문했음으로 check ch = [ 0, 1, 0, 0, 0, 0 ]
  DFS(1);

  return answer;
}

let arr = [
  [1, 2],
  [1, 3],
  [1, 4],
  [2, 1],
  [2, 3],
  [2, 5],
  [3, 4],
  [4, 2],
  [4, 5],
];
console.log(solution(5, arr));
