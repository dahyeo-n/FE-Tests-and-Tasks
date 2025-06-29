function solution(food) {
 // 각 선수에게 배분할 음식 배치를 저장할 문자열
  let str = '';
  
  // 물(food[0])은 제외하고, i번 음식을 반으로 나누어 문자열에 추가
  for(let i = 1; i < food.length; i++) {
      str += i.toString().repeat(Math.floor((food[i] / 2) ));
  }
  
  // 전체 배치: 왼쪽 음식 + 물(0) + 오른쪽 음식 (좌우 대칭)
  // str만 먼저 문자열로 만들고 뒤에 str은 reverse로 
  return str + "0" + [...str].reverse().join('')
}