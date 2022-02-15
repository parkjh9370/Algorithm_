function solution() {
    let answer = "";
    let queue = [];

    queue.push(1);

    while( queue.length ) {
        let v = queue.shift();
        answer+=v+" ";

        // for (let nv of [v*2, v*2+1]) {
        //     if (nv > 7) continue;
        //     queue.push(nv);
        // }
		if ( v*2 < 8  && v*2+1 < 8) {
			queue.push(v*2, v*2+1)
			// console.log(queue)
		}
		// if ( v*2+1 < 8 ) {
		// 	queue.push(v*2+1)
		// }
    }
    return answer
}


console.log(solution())