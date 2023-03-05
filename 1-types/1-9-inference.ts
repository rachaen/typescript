{
  /**
   * Type Inference: 타입 추론
   */

  let text = 'hello'; // 선언함과 동시에 문자열을 할당했기 때문에 타입스크립트에서 자동으로 string으로 타입 지정
  // text = 1;
  function print(message = 'hello') {
    console.log(message);
  }
  print('hellooooo');
  print();

  function add(x: number, y: number) {
    return x + y; // 숫자를 더하니까 숫자겠거니
  }

  const result = add(1, 2); // 숫자를 리턴하니 result는 숫자타입이겠거니

  // 타입추론 좋은건가~? 아니라고 생각합니다. 함수에서는 정확하게 타입을 명시하는 것이 좋음
}
