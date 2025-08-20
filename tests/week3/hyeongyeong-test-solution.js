function solution(a, b, n) {    
  let answer = 0;
  
  while(n >= a) {
      const exchanged = Math.floor(n / a) * b; // 한 번에 교환 가능한 횟수(세트 수) * 한 번에 교환받는 콜라 병 수
      
      answer += exchanged;
      n = (n % a) + exchanged; // 남은 빈 병 + 방금 받은 콜라를 마시고 생긴 빈 병
  }
  
  return answer;
}

/*
* a: 콜라와 교환하기 위해 필요한 빈 병 수
* b: 빈 병 a개를 가져다 주면 마트가 주는 콜라 병 수
* n: 현재 가지고 있는 빈 병 수 
* answer: 지금까지 교환해서 얻은 총 콜라 병 수
* exchanged: 한 번의 교환 순서에서 얻은 총 콜라 병 수

[알고리즘 설명]
1. 현재 가지고 있는 빈 병(n)이 a개 이상일 동안 반복
2. n을 a로 나눠서 한 번(반복 1번)에 교환 가능한 세트 수를 구하고 각 세트에서 얻은 콜라 병 수를 곱하여 exchanged 변수에 저장
3. answer에 exchanged를 누적
4. 다음 반복에서 사용할 빈 병 수 n을 갱신
  - n = (n % a) + exchanged
  - (n % a): 교환하고 남은 빈 병
  - exchanged: 방금 받은 콜라를 마시고 생긴 빈 병
5. n이 a보다 작아지면 더 이상 교환할 수 없으므로 종료
6. 마지막에 answer 반환
*/
