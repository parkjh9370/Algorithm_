function orderOfPresentation (N, K) {
    // N 개 배열에 대한 모든 경우의 수
    const factorial = (n) => {
        if ( n <= 1 ) return 1;
        return n * factorial(n - 1);
    }

    // 발표 순서를 담는 변수 생성
    let order = 0;

    // N개의 조 중에 어떤 조가 포함되었는지 확인
    // 첫번째는 더미 데이터
    // [false, false, false, false]
    const isUsed = Array(N+1).fill(false);
    
    // K의 길이만큼 순회
    for ( let i = 0; i < K.length; i++) {
        // K번째 조를 num에 담음
        // 첫 입출력 예시의 경우 2
        const num = K[i]
        // [false, false, true, false]
        isUsed[num] = true;
        // [false]
        const candidates = isUsed.slice(1, num)
        // [1]
        const validCnt = candidates.filter((el) => el===false).length
        // 1 * factorial(2) = 2
        const formerCnt = validCnt * factorial( N- i - 1);
        //
        order = order + formerCnt
    }
    return order
}

let output = orderOfPresentation(3, [2, 3, 1]);
console.log(output); // 3

output = orderOfPresentation(5, [1, 3, 2, 4, 5])
console.log(output); // 6