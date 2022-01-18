function solution(arr){
    let oddNum = arr.filter(i => i%2 === 1)
    let answer1 = 0;
    
    for (index of oddNum) {
        answer1 = answer1 + index
    }
    
    let answer2 = oddNum.sort((a,b)=> a - b)[0]
    console.log(answer2)
    let answer = []
    answer.push(answer1,answer2)

    return answer
}

arr=[12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));