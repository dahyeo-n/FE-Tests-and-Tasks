function solution(a, b, n) {
  let exchangedCoke = 0; // 교환한 콜라

  while (n >= a) {
    const newCola = Math.floor(n / (a * b));
    exchangedCoke += newCola;
    n = newCola + (n % a); // 남은 빈 병 = 새로 받은 콜라 + (교환 못한 나머지 빈 병)
  }

  return exchangedCoke;
}

/*
* a: 콜라를 받기 위해 마트에 주어야 하는 병 수
* b: 빈 병 a개를 가져다 주면 마트가 주는 콜라 병 수
* n: 상빈이가 가지고 있는 빈 병의 개수
* return: 상빈이가 받을 수 있는 콜라의 병 수

* 상빈이가 가지고 있는 빈 병의 개수 / (a * b);
* 남은 빈 병 = 새로 받은 콜라 + (교환 못한 나머지 빈 병)
*/
