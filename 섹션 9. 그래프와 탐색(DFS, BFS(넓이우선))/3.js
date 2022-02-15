function solution(n, arr){  
    let answer = 0;
	// 0번 인덱스는 비워두고 1번 인덱스 부터 사용 
    let graph = Array.from({length: n+1}, ()=>Array());
    // node 방문 여부 체크 배열
    let ch = Array.from({length:n+1}, ()=>0); // [ 0, 0, 0, 0, 0, 0 ]

    let path=[];

    // 간선 정보 그래프에 반영
    for (let [a, b] of arr ) {
        graph[a].push(b) ; 
    }

    function DFS(v) {
        // v가 종착점인 5에 도달했을 때
        if ( v === n ) {
            answer++ ;
            console.log(path)
        }
        else {
            for (let i = 0; i <= graph[v].length; i++ ) {
                
                if ( ch[graph[v][i]] === 0 ) {
                    ch[graph[v][i]] = 1;  
                    path.push(graph[v][i]);
                    DFS(graph[v][i]); 
                    ch[graph[v][i]] = 0
                    path.pop();
                }
            }
        }
    }

    path.push(1) //출발점 path = [1]

    ch[1] =1; //1은 방문했음으로 check ch = [ 0, 1, 0, 0, 0, 0 ]
    DFS(1);

    return answer;
}


let arr=[[1, 2], [1, 3], [1, 4], [2, 1], [2, 3], [2, 5], [3, 4], [4, 2], [4, 5]];
console.log(solution(5, arr));

