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
/**
 * 선택 정렬(Selection Sort)
1. 첫번째 for문을 통해 초기 인덱스 번호를 idx에 저장
2. 두번째 for문을 통해 그 다음 인덱스를 확인하며 idx에 저장된 수보다 작은 경우 해당 idx 번호를 idx에 저장
  (idx에는 가장 작은 수의 인덱스 번호가 저장됨)
3. 저장된 idx 숫자와 초기 for문에서 설정된 idx 숫자와 자리를 바꿔준다.
4. 해당 과정을 반복할 시 오름차순으로 숫자가 정렬된다.
 */
  