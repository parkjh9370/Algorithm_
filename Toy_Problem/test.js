// const bubbleSort = function (arr) {
  
//   for (let i = 0; i < arr.length; i++ ) {
//     for (let j = i + 1; j < arr.length ; j++ ) {
//       if ( arr[i] > arr[j] ) {
//         let switchInit = arr[i]
//         arr[i] = arr[j]
//         arr[j] = switchInit
//         console.log(arr)
//       }
//     }
//   }
//   return arr

// };
const swap = function (idx1, idx2, arr) {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

// naive solution
// let bubbleSort = function (arr) {
//   let N = arr.length;

//   for (let i = 0; i < N - 1; i++) {
//     // 매 반복(iteration)마다 i번째로 큰 수가 마지막에서 i번째 위치하게 된다.
//     // 이미 정렬된 요소는 고려할 필요가 없으므로, 'j < N - 1 - i'만 비교하면 된다.
//     for (let j = 0; j < N - 1 - i; j++) {
//       if (arr[j] > arr[j + 1]) {
//         swap(j, j + 1, arr);
//       }
//     }
//   }

//   return arr;
// };

// optimized solution
let bubbleSort = function (arr) {
  let N = arr.length;

  for (let i = 0; i < N; i++) {
    // swap 횟수를 기록한다.
    // 어떤 요소도 swap되지 않은 경우, 배열은 정렬된 상태이다.
    let swaps = 0;

    // 매 반복(iteration)마다 i번째로 큰 수가 마지막에서 i번째 위치하게 된다.
    // 이미 정렬된 요소는 고려할 필요가 없으므로, 'j < N - 1 - i'만 비교하면 된다.
    for (let j = 0; j < N - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        swaps++;
        swap(j, j + 1, arr);
      }
    }

    if (swaps === 0) {
      break;
    }
  }

  return arr;
};


let output = bubbleSort([1, 2, 43, 100, 100, 21]);
console.log(output); // --> [1, 2, 3]