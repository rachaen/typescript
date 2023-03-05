{
  /**
   * Enum
   * 상수 값들을 한곳에 모아서 정의
   */
  // JavaScript
  const MAX_NUM = 6;
  const MAX_STUDENTS_PER_CLASS = 10;
  // 관련되었지만 묶을 수 없음
  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNESDAY = 2;
  //
  const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1, WEDNESDAY: 2 });
  const dayOfToday = DAYS_ENUM.MONDAY;

  // TypeScript
  // 앞에 글자만 대문자로 적어야 함
  /* enum Days {
    Monday, // 0
    Tuesday,  // 1
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
    }*/
  /* enum Days {
    Monday = 1, // 1
    Tuesday, // 2
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  } */
  enum Days {
    Monday = 'mon',
    Tuesday = 'tue',
    Wednesday = 'wed',
    Thursday = 'thur',
    Friday = 'fri',
    Saturday = 'satur',
    Sunday = 'sun',
  }
  console.log(Days.Tuesday);
  let day = Days.Saturday;
  // 문제점: Enum으로 타입이 지정된 변수에 다른 어떤 숫자도 할당할 수 있다. 라고 하셨는데
  // day = 10; // 할당 못하는군! 업데이트 된듯.
  console.log(day);

  type DaysOfWeek = 'Monday' | 'Tuesday' | 'Wednesday';
  let dayOfWeek: DaysOfWeek = 'Monday';
  dayOfWeek = 'Wednesday';
}
