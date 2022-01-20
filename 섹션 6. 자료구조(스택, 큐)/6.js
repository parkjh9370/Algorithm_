function solution(n, k) {
    let answer;
    // v: value값, i: index
    let queue=Array.from({length:n}, (v, i)=>i+1); 
    // console.log(queue) // [1,2,3,4,5,6,7,8]
    
    // queue 가 비어 있으면 종료
    while (queue.length) {
        /**
         * k - 1 번 반복, if) k = 3
         * [3,4,5,6,7,8,1,2] -> 돌고나면 [4,5,6,7,8,1,2]
         * [6,7,8,1,2,4,5] -> [7,8,1,2,4,5]
         * [1,2,4,5,7,8] -> [2,4,5,7,8]
         * [5,7,8,2,4] -> [7,8,2,4]
         * [2,4,7,8] -> [4,7,8]
         * [8,4,7] -> [4,7]
         * 3을 외쳐도 index가 없어 순서를 바꾸지 않음
         * [4,7] -> [4]
         */
        for (let i = 0; i < k - 1; i++ ) queue.push(queue.shift());
        // k(3) 제거
        queue.shift();
        // 마지막 남은 자료 넣어주기
        console.log(queue)
        if (queue.length === 1) answer = queue.shift();
    }
    return answer;
}

console.log(solution(8,3));