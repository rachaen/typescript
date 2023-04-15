{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  // class를 만든다는 것 => 서로 관련있는 데이터나 함수들을 묶어놓는 기능. templete을 만드는 기능
  class CoffeeMaker {
    // class에서 한번 정의되어지고 class를 이용한 object 사이에서 공유가 될수 있는 것을 멤버변수로 선언하면 메모리 낭비가 될 수 있기 때문에 static을 붙여서 class level로 지정해준다.
    static BEANS_GRAMM_PER_SHOT: number = 7; // class level
    coffeeBeans: number = 0; // instance (object) level

    // constructor: class를 이용해서 object를 만들 때 처음에 호출되는 함수
    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
        // class level이기 때문에 CoffeMaker.으로 접근한다.
        throw new Error('Not enough coffee beans!');
      }
      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
      return {
        shots,
        hasMilk: false,
      };
    }
  }

  const maker = new CoffeeMaker(32);
  console.log(maker);
  const maker2 = new CoffeeMaker(14);
  console.log(maker2);

  const maker3 = CoffeeMaker.makeMachine(3);
}
