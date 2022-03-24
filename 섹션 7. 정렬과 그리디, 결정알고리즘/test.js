function solution(arr) {
  let answer = arr;

  for ( let i = 0; i < arr.length - 1; i++ ) {
    // 초기 인덱스 번호 idx에 저장
    let idx = i;
    for ( let j = i+1; j < arr.length; j++ ) {
      // arr[idx] 보다 작은 값 나타나면 그 인덱스를 idx로 바꿔줌
      if (arr[j] < arr[idx]) idx = j;
    }
    // 각 배열을 교환
    [arr[i], arr[idx]] = [arr[idx], arr[i]];
  }

  return answer;
}

let arr = [13, 5, 11, 7, 23, 15];
console.log(solution(arr))