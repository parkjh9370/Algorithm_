function solution(arr) {
    let answer = arr;
  
    for ( let i = 0; i < arr.length - 1; i++ ) {
      for ( let j = 0; j < arr.length - i - 1; j++) {
        if ( arr[j] > 0 && arr[j+1] < 0) {
          [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
        }
      }
    }
    return answer;
  }
  
  let arr=[1, 2, 3, -3, -2, 5, 6, -6];
  console.log(solution(arr));
  
  /**
   * 버블 정렬 응용 (Special Sort) - 구글 인터뷰
   * - 양의 정수, 음의 정수의 순서에 변화를 주지 말고 음의 정수를 앞으로 정렬해라
   * 
   * 1. 첫번째 for 문에 의해 arr 배열의 앞 숫자 갯수 만큼 반복한다.
   * 2. 두번째 for 문에 의해 다음 인덱스가 음수일 경우 자리를 바꾼다.
   * (처음 실행될 경우 arr 배열 마지막 인덱스까지 음수가 있으면 앞의 양수와 자리를 바꾼다.)
   * 3. 배열 마지막에 음수가 있을 경우 j for문이 실행될 때마다 한칸씩 앞으로 떙겨져 음수가
   * 양수 앞에 정렬된다.
   */