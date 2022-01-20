const isSubsetOf = function (base, sample) {
  
  base.sort((a,b) => a-b);
  sample.sort((a,b) => a-b);


  const findSampleIfIncludeIdx = (sampleIdx, base) => {
    for (let i = 0; i < base.length; i++ ) {
      if ( sampleIdx === base[i]) return base[i]
      else if (sampleIdx < base[i]) return -1;
    }
    return -1;
  }

  let setIdx = 0;
  let ifTrueArray = []

  for ( let i = 0; i < sample.length; i++ ) {
    setIdx = findSampleIfIncludeIdx(sample[i], base)
    if (setIdx === -1) return false
    else {
      // console.log(setIdx)
      ifTrueArray.push(setIdx)
    }
  }

  return ifTrueArray
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