function solution(arr) {
  let answer = arr;

  for ( let i = 0; i < arr.length - 1; i++ ) {
    for ( let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j+1]) {
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
      }
    }
  }

  return answer;
}

let arr = [13, 5, 11, 7, 23, 15];
console.log(solution(arr));

/**
  * 거품정렬(Bubble Sort)
1. 첫번째 for문을 통해 모든 배열 마지막 숫자 전까지를 탐색한다.
2. 두번째 for문을 통해 i값이 증가함에 따라 i값보다 한자리 앞의 숫자까지 탐색한다.
3. 만약 해당 숫자가 다음 숫자보다 클 경우 위치를 변경시켜 준다.
4. 첫번째 i = 0 일 경우를 모두 수행하고 나면 배열 중 가장 큰 수가 맨 뒤로 정렬 된다.
5. 두번째 i = 1일 경우를 모두 수행하면 나면 배열 중 두번째 큰 수가 맨 뒤 앞에 정렬된다.
6. 이를 반복한다.
 */