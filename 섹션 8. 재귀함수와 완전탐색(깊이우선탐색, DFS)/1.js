/*
    재귀 함수: 함수가 직접 또는 간접적으로 자신을 호출하는 프로세스
     vs(반복문)
    -> 장점: 상대적으로 간결한 코드
    -> 단점: 메모리를 많이 사용함, 속도가 상대적으로 느림
 */

function solution(n) {
    function DFS(L){
        if(L == 0) return;
        else{
            DFS(L-1);
            console.log(L);
        }
    }

    DFS(n)
}

solution(3);