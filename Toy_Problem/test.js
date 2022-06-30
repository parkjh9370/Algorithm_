const isSubsetOf = function (base, sample) {
  base.sort((a,b) => a-b);
  sample.sort((a,b) => a-b);

  const isPartOfbase = (sample, base) => {
    console.log(sample)
    for ( let i = 0; i < base.length; i++ ) {
      if (sample === base[i]) return 1;
    }
    return -1
  }

  let findIndex = 0;
  // 검사해야할 부분 반복문 돌려 주며 체크
  for ( let i = 0; i < sample.length; i++ ) {
    // 체크 함수
    findIndex = isPartOfbase(sample[i], base)
    if (findIndex === -1) return false
  }
  return true;
};


  let base = [1, 2, 3, 4, 5];
  let sample = [7, 3];
  let output = isSubsetOf(base, sample);
  console.log(output); // --> true
  
  sample = [6, 7];
  output = isSubsetOf(base, sample);
  console.log(output); // --> false
  
  base = [10, 99, 123, 7];
  sample = [11, 100, 99, 123];
  output = isSubsetOf(base, sample);
  console.log(output); // --> false