function solution(arr) {
    let answer="NO", flag=0;
    let total = arr.reduce((a, b) => a+b, 0);
    let n = arr.length;

    DFS = (L, sum) => {
        if(flag) return;
        if (L === n) {
            if( (total-sum) === sum) {
                answer="YES";
                flag = 1;
            }
        }
        else {  
            DFS(L+1, sum+arr[L]);
            console.log(sum)
            DFS(L+1, sum)
            console.log(sum)
        }

    }
    DFS(0,0);
    return answer;
}

let arr = [1, 3, 5, 6 ,7, 10];
console.log(solution(arr));