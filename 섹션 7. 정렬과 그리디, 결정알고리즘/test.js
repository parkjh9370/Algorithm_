// const quickSort = function (arr) {
//     // 배열 요소가 1개이면 정렬할 필요가 없음으로 리턴 arr
//       if (arr.length <= 1) return arr;

//     // 첫번째 요소 저장
//       const pivot = arr[0];
//       const left = [];
//       const right = [];
    
    
//       for (let i = 1; i < arr.length; i++) {
//         if (arr[i] <= pivot) left.push(arr[i]);
//         else right.push(arr[i]);
//       }
    
//       const lSorted = quickSort(left);
//     //   console.log(`lSorted1 = ${lSorted}`)
//     //   console.log(`rSorted = ${rSorted}`)
//       const rSorted = quickSort(right);
//     //   console.log(`lSorted2 = ${lSorted}`)
//     //   console.log(`rSorted2 = ${rSorted}`)     
//       return [...lSorted, pivot, ...rSorted];
// };

function quickSort (array) {
    if (array.length < 2) {
      return array;
    }
    const pivot = [array[0]];
    const left = [];
    const right = [];
    for (let i = 1; i < array.length; i++) {
      if (array[i] < pivot) {
        left.push(array[i]);
        } 
      else if (array[i] > pivot) {
        right.push(array[i]);
        }
        else {
        pivot.push(array[i]);
        }
    }
  // console.log(`left: ${left}, pivot: ${pivot}, right: ${right}`);
    // return quickSort(left).concat(pivot, quickSort(right));
    return quickSort(left).concat(pivot, quickSort(right));
  
  }

let arr = [13, 5 , 11, 7, 23, 15];

console.log(quickSort(arr))