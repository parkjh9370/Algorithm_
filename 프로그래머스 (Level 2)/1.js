function solution(n) {
    var answer = 0;

    if ( n === 1) return 1 % 1234567
  
    var firstNum = 0;
    var secondNum = 1;
    var targetNum = 0;
  
    while ( targetNum < n - 1) {
      answer = (firstNum + secondNum) % 1234567;
    
      firstNum = secondNum
      secondNum = answer;
        
      targetNum++
    }
      
    return answer;
  }



let test = solution(6)

console.log(test)