{
  /**
   * Type Aliases: 새로운 타입을 정의할 수 있다
   */

  type Text = string;
  const name: Text = 'ellie';
  const address: Text = 'korea';
  type Num = number;
  type Student = {
    name: string;
    age: number;
  };

  const student: Student = {
    // animal: dog,
    name: 'ellie',
    age: 12,
  };

  /**
   * String Literal Types: type을 문자열로 지정
   */

  type Name = 'name';
  let ellieName: Name;
  ellieName = 'name'; // 다른 문자열을 넣을 수 없음.
  type JSON = 'json';
  const json: JSON = 'json';

  type Boal = true;
}
