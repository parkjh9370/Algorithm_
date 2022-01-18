function solution(n, arr){
    let answer
    let max = Number.MIN_SAFE_INTEGER;

    for ( let index of arr ) {
        // let sum = 0;
        // let tmp = index;

        // while ( tmp ) {
        //     sum += (tmp % 10) ;
        //     tmp = Math.floor(tmp/10);
        // }

        let sum = index.toString().split('').reduce((prev,cur) => prev + Number(cur),0)

        if ( sum > max ) {
            max = sum;
            answer = index;
        }
        else if ( sum === max ) {
            if ( index > answer ) {
                console.log(index)
                console.log(answer)
                answer = index
            }
        }
    }

    return answer
}

let arr=[128, 460, 603, 40, 521, 137, 123];
console.log(solution(7, arr));

/*
function solution(n, arr){
    let answer = 0
    let setNumber = 0
    
    for ( let i= 0; i< arr.length; i++) {
        let setString = String(arr[i]);
        let preNumber = 0

        for ( let str of setString ) {
            preNumber += Number(str)   
        }
        
        if ( preNumber >= setNumber ) {
            setNumber = preNumber
            answer = arr[i]
        }

    }

    return answer
}
*/