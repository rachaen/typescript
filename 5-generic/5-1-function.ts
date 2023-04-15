{
  //  문제점: 숫자만 확인할 수 있음. 타입별로 함수를 만드는 것은 미친짓 ㄷㄷㄷ
  function checkNotNullBad(arg: number | null): number {
    if (arg == null) {
      throw new Error('not valid number!');
    }
    return arg;
  }

  //  문제점: 타입보장이 되지 않음.
  function checkNotNullAnyBad(arg: any | null): any {
    if (arg == null) {
      throw new Error('not valid number!');
    }
    return arg;
  }

  //  제네릭 함수
  function checkNotNull<T>(arg: T | null): T {
    if (arg == null) {
      throw new Error('not valid number!');
    }
    return arg;
  }

  const number = checkNotNull(123);
  const bool: boolean = checkNotNull(true);
}
