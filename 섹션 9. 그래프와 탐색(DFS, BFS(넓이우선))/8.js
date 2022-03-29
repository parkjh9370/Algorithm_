function solution(board){  
	let answer=0;
	let n=board.length;
	// x, y방향 탐색
	let dx=[-1, -1, 0, 1, 1, 1, 0, -1];
	let dy=[0, 1, 1, 1, 0, -1, -1, -1];
	
	let queue = [];

	for ( let i = 0; i < n; i++ ) {
		for ( let j = 0; j < n; j++ ) {
			// 처음 board 좌표 1을 만났을 때 탐색
			if (board[i][j] === 1) {
				// 해당 board 좌표 0으로 만들고 i,j 좌표 큐에 넣고 answer++
				board[i][j]=0;
				queue.push([i, j]);
				answer++;
				// 주변 좌표에서 1이 발견되면 0으로 바꿔줌
				while(queue.length) {
					// 1이 발견된 좌표를 중심으로 탐색
					let [x, y] = queue.shift();
					console.log(x, y)
					// 8방향 탐색
					for (let k = 0; k < 8; k++ ) {
						let nx = x+dx[k];
						let ny = y+dy[k];
						// board 바깥으로 빠져나가는 예외 케이스 제외
						// 해당 좌표에 1이 발견될 시 queue에 넣기
						if (nx>=0 && nx<n && ny>=0 && ny<n && board[nx][ny] === 1){
							board[nx][ny]=0;
							queue.push([nx, ny]);
						}
					}
				}
				console.log('BFS End');
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