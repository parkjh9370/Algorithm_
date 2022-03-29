function solution(board){  
	let answer=0;
	let n=board.length;
	// x, y방향 탐색
	let dx=[-1, -1, 0, 1, 1, 1, 0, -1];
	let dy=[0, 1, 1, 1, 0, -1, -1, -1];

	function DFS(x, y){
	// 발견된 지점 체크 (다시 탐색하지 않도록 0으로 바꿔줌)
	   board[x][y]=0;
	// 8방향 체크
	   for(let k=0; k<8; k++){
		   let nx=x+dx[k];
		   let ny=y+dy[k];
		   // 격자판 바깥으로 빠져나가는 케이스 없애기, 1이 발견된 지점으로 탐색
		   if(nx>=0 && nx<n && ny>=0 && ny<n && board[nx][ny]===1){
			   DFS(nx, ny);
		   }
	   } 
	}

	for(let i=0; i<n; i++){
		for(let j=0; j<n; j++){
			if(board[i][j]===1){
				answer++;
				DFS(i, j);
				// console.log('DFS end')
			}
		}
	}
	return answer;
}

let arr=[[1, 1, 0, 0, 0, 1, 0], 
		 [0, 1, 1, 0, 1, 1, 0],
		 [0, 1, 0, 0, 0, 0, 0],
		 [0, 0, 0, 1, 0, 1, 1],
		 [1, 1, 0, 1, 1, 0, 0],
		 [1, 0, 0, 0, 1, 0, 0],
		 [1, 0, 1, 0, 1, 0, 0]];

console.log(solution(arr));