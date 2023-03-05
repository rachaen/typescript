{
  /**
   * Type Assertions 💩
   * 100000% 장담할 때 사용해야 함
   */
  // 자바스크립트이기 때문에 리턴되는 타입을 알 수 없지만 내부적으로는 항상 리턴하는 값이 문자열인 함수
  function jsStringFunc(): any {
    return 'hello';
  }
  const result = jsStrFunc();
  // result.length
  console.log((result as string).length);
  console.log((<string>result).length);
  // 문자열을 리턴한다고 확신을 했지만 숫자를 리턴했다면..?
  // 오류는 나지 않음. undefined
  const wrong: any = 5;
  console.log((wrong as Array<number>).push(1)); // error.... 잘못 사용하면 실시간으로 죽을 수 있다^^

  function findNumbers(): number[] | undefined {
    return undefined;
  }

  // const numbers = findNumbers();
  // numbers.push(2); // numbers는 숫자배열일수도 있지만 undefined가 될 수도 있기 때문에 오류!\

  // 옵션이 아니야 절대적으로 값이 있다!! 무조건 배열이야 확신!!
  /* const numbers = findNumbers();
  numbers!.push(2);  */
  const numbers = findNumbers()!;
  numbers.push(2);

  // const button = document.querySelector('class'); // 요소가 있을수도 있고 null일수도 있음
  /* if (button) {
    button.nodeValue;
  } */
  const button = document.querySelector('class')!; // 요소가 있을수도 있고 null일수도 있음
}
