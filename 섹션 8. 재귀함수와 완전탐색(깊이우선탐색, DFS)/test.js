function solution(n) {
  let answer = "";
  
  DFS = (n) => {
    if ( n===0 ) return
    else {
      DFS(parseInt(n/2))
      answer += (n%2);
    }
  }

  DFS(n)
  return answer
}

let output = solution(11);
console.log(output);