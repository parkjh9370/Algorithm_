// 전위 순회
function solution(v) {
    let answer;
    DFS = (v) => {
        if (v > 7) return 
        else {
            console.log(v)
            DFS(v*2);
            DFS(v*2+1);
        }
    }

    DFS(v)
    return answer;
}

console.log(solution(1)) // 1 2 4 5 3 6 7

// 중위 순회
function solution(v) {
    let answer;
    DFS = (v) => {
        if (v > 7) return 
        else {
            DFS(v*2);
            console.log(v);
            DFS(v*2+1);
        }
    }

    DFS(v)
    return answer;
}

console.log(solution(1)) // 4 2 5 1 6 3 7

// 후위 순회
function solution(v) {
    let answer;
    DFS = (v) => {
        if (v > 7) return 
        else {
            DFS(v*2);
            console.log(v);
            DFS(v*2+1);
        }
    }

    DFS(v)
    return answer;
}

console.log(solution(1)) //  4 5 2 6 7 3 1