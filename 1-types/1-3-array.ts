{
  // Array
  const fruits: string[] = ['🍎', '🍌'];
  const scores: Array<number> = [1, 3, 4];

  // readonly: 변경을 못하게 Array는 사용하지 못함.
  function printArray(fruits: readonly string[]) {}

  // Tuple : 서로 다른 타입을 함께 가질 수 있는 배열  💩 -> Tuple을 사용하는 대신 interface, type alias, class로 사용하는 것이 좋음
  let student: [string, number];
  student = ['name', 123];
  student[0]; // name
  student[1]; // 123
  const [name, age] = student;

  // Tuple을 좋게 쓴 예시: react에서 useState
}
