function isPrime(number) {
    if ( number === 1) {
        return false
    }
    for ( let i = 2; i < parseInt(Math.sqrt(number)); i++ ) {
        if ( number % i === 0) {
            return false
        }
    }
    return true
}
function solution(arr){
    let answer = [];

    for ( let index of arr ) {
        let res = Number(index.toString().split('').reverse().join(''));
        // let res = 0;
        // while ( index ) {
        //     let t = index % 10;
        //     res = res * 10 + t;
        //     index = parseInt(index / 10);
        // }
        if ( isPrime(res) ) {
            answer.push(res)
        }
    }
    return answer
}

let arr=[32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));

/*
function isPrime(arr){
    let newArr = []
    let reverseStr = ''
    for ( let index of arr) {
        reverseStr = String(index).split('').reverse().join('')
        newArr.push(Number(reverseStr))
    }
    
    let answer = [];
    for ( let index of newArr ) {
        let flag = 0;
        for ( let i = 2; i < index - 1; i++ ) {
            if ( index % i === 0 ) {
                flag = 1
            }
        }
        if ( index === 1) {
            flag = 1
        }

        if (!flag){
            answer.push(index)
        }
    }
    return answer
}
*/