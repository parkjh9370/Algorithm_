const isSubsetOf = function (base, sample) {
  // [1, 2, 3, 4 ,5 ]
  base.sort((a, b) => a - b);
  // console.log(base)
  // [1, 3]
  sample.sort((a, b) => a - b);
  // console.log(sample)

  const findsampleIdxInSortedbase = (sampleIdx, base, baseIdx) => {
    for (let i = baseIdx; i < base.length; i++ ) {
      if (sampleIdx === base[i]) return i;
    }
    return -1;
  }

  let baseIdx = 0;
  // base = [1, 2, 3, 4, ,5]
  // sample = [1,3]
  // sample 인자를 하나씩 반복하면서 초기값 0을 넘겨주고
  // 만약 부분집합이면 그대로 0을 돌려주고 아니라면 -1을 리턴값으로 넘겨줌
  for (let i = 0;i < sample.length; i++ ) {
    baseIdx = findsampleIdxInSortedbase(sample[i], base, baseIdx);
    if (baseIdx === -1) return false
  }
  return true;
};


  let base = [1, 2, 3, 4, 5];
  let sample = [1, 3];
  let output = isSubsetOf(base, sample);
  console.log(output); // --> true
  
  sample = [6, 7];
  output = isSubsetOf(base, sample);
  console.log(output); // --> false
  
  base = [10, 99, 123, 7];
  sample = [11, 100, 99, 123];
  output = isSubsetOf(base, sample);
  console.log(output); // --> false