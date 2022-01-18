function solution(s){
	let answer="";
  for(let i=0; i<s.length; i++){	//인덱스를 알아야하기 때문에 for of 사용하면 안됨
    if(s.indexOf(s[i]) === i) {
        console.log(s.indexOf(s[i]))
        answer += s[i];
      }
  }
  
  return answer;
}

let str = "ksekkset";
console.log(solution(str))


// 중복된 문자 갯수 구하기

// function solution(s){
// 	let answer= 0;
//   let position = s.indexOf('k');

//   while( position !== -1) {
//     answer++;
//     position = s.indexOf('k', position + 1)
//   }
  
//   return answer;
// }