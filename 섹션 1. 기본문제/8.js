function solution(arr){
    let sumNumber = arr.reduce((prev, cur) => prev = prev + cur)
    // console.log(sumNumber)
    let answer = [...arr]

    for ( let i = 0; i < arr.length; i++ ) {
        for ( let j = i + 1; j < arr.length; j++ ) {
            if (sumNumber - arr[i] - arr[j] === 100 ) {
                console.log(arr[i])
                console.log(arr[j])
                answer.splice(j, 1)
                answer.splice(i, 1)
            }
        }
    }
return answer
}

let arr=[20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));