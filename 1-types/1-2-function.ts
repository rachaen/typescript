{
  // JavaScript 💩
  // 어떤 값을 전달하고 리턴해야 하는 것인지 모르는 경우가 있음.
  function jsAdd(num1, num2) {
    return num1 + num2;
  }
  // TypeScript ⭐
  function tsAdd(num1: number, num2: number): number {
    return num1 + num2;
  }

  // JavaScript 💩
  function jsFetchNum(id) {
    // code ...
    // code ...
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }
  // TypeScript ⭐
  function tsFetchNum(id: string): Promise<number> {
    // code ...
    // code ...
    return new Promise((resolve, reject) => {
      resolve(100); // 숫자의 데이터를 리턴하는 promise
    });
  }

  // 안정적으로 프로그래밍
  // 조금 더 나은 문서화

  // JavaScript💩 => TypeScropt ⭐
  // Optional parameter: ? 전달 받을수도 있고 아닐수도 있다
  function printName(firstName: string, lastName?: string) {
    console.log(firstName);
    console.log(lastName);
  }
  printName('Steve', 'Jobs');
  printName('Ellie');

  // Default prameter
  function printMessage(message: string = 'default message') {
    console.log(message);
  }
  printMessage();

  // Rest parameter
  function addNumbers(...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b);
  }
  console.log(addNumbers(1, 2));
  console.log(addNumbers(1, 2, 3, 4));
  console.log(addNumbers(1, 2, 3, 4, 0));
}
