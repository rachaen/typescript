{
  /**
   * JavaScript
   * Primitive: number, string, boolean, bigint, symbol, null, undefine
   * Object: function, array...
   */

  // number
  const num: number = 0.1;

  // string
  const str: string = 'hello';

  // boolean
  const boal: boolean = false;

  // 단독적으로 undefined, null을 사용하지 않음. 보편적으로 undefined를 사용함
  // undefined
  let name: undefined; // 💩
  let age: number | undefined;
  age = undefined;
  age = 1;

  function find(): number | undefined {
    return undefined;
  }
  // null
  let person: null; // 💩
  let person2: string | null;

  // unknown: 알 수 없는 타입.  💩
  let notSure: unknown = 0;
  notSure = 'he';
  notSure = true;

  // any: 어떤것이든 담을 수 있는 타입 💩
  let anything: any = 0;
  anything = 'hello';

  // void: 아무것도 리턴하지 않음. 변수에 선언해서 쓰진 않음
  function print(): void {
    console.log('hello');
    return;
  }

  let unusable: void = undefined; // 💩

  // never: 리턴하지 않음
  // error을 던지거나 while문
  function throwError(message: string): never {
    throw new Error(message);
    while (true) {}
  }
  let neverEnding: never; // 💩

  // object
  let obj: object; // 💩
  function acceptSomeObject(obj: object) {}
  acceptSomeObject({ name: 'ellie' });
  acceptSomeObject({ name: 'dog' });
}
