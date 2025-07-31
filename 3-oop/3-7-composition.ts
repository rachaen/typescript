{
  /**
   * 상속의 문제점
   * 1. 상속의 깊이가 깊어질수록 서로간의 관계가 복잡해진다.
   * 상속은 수직적인 관계
   * 2. 부모클래스의 행동을 수정하게 되면 수정된 사항때문에 이것을 상속하는 모든 클래스에 영향을 준다.
   * 3. typescript에서는 한가지 이상의 부모클래스를 상속할 수 없다.
   *
   * => composition을 사용하는 것이 좋다!
   * Favor COMPOSITION over inheritance: 상속대신에 composition을 선호하라!
   * composition: 필요한 것을 가져와서 조립해나가는 것
   *
   * decoupling원칙: 클래스들 간 상호작용을 하는 경우 클래스를 노출하는 것이 아니라 계약서를 통해서(interface) 상호작용하는 것이 좋다
   */

  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
  };

  interface MilkFrother {
    makeMilk(cup: CoffeeCup): CoffeeCup;
  }

  interface SugarProvider {
    addSugar(cup: CoffeeCup): CoffeeCup;
  }

  // 싸구려 우유 거품기
  class CheapMilkSteamer implements MilkFrother {
    private steamMilk(): void {
      console.log('Steaming some milk... 🥛');
    }
    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }

  class FancyMilkSteamer implements MilkFrother {
    private steamMilk(): void {
      console.log('Fancy!!! some milk... 🥛');
    }
    makeMilk(cup: CoffeeCup): CoffeeCup {
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }

  class ColdMilkSteamer implements MilkFrother {
    private steamMilk(): void {
      console.log('Cold!!! some milk... 🥛');
    }
    makeMilk(cup: CoffeeCup): CoffeeCup {
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }

  class NoMilk implements MilkFrother {
    makeMilk(cup: CoffeeCup): CoffeeCup {
      return cup;
    }
  }

  // 설탕 제조기
  class CandySugarMixer implements SugarProvider {
    private getSugar() {
      console.log('Getting some sugar from candy 🍭');
      return true;
    }
    addSugar(cuppa: CoffeeCup): CoffeeCup {
      const sugar = this.getSugar();
      return {
        ...cuppa,
        hasSugar: sugar,
      };
    }
  }
  class SugarMixer implements SugarProvider {
    private getSugar() {
      console.log('Getting some sugar from jar ...');
      return true;
    }
    addSugar(cuppa: CoffeeCup): CoffeeCup {
      const sugar = this.getSugar();
      return {
        ...cuppa,
        hasSugar: sugar,
      };
    }
  }

  class NoSugar implements SugarProvider {
    addSugar(cup: CoffeeCup): CoffeeCup {
      return cup;
    }
  }

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7; // class level
    private coffeeBeans: number = 0; // instance (object) level

    constructor(coffeeBeans: number, private milk: MilkFrother, private sugar: SugarProvider) {
      this.coffeeBeans = coffeeBeans;
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error('value for beans should be greater than 0');
      }
      this.coffeeBeans += beans;
    }

    clean() {
      console.log('cleaning the machine...🧼');
    }

    private grindBeans(shots: number) {
      console.log(`grinding beans for ${shots}`);
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
        throw new Error('Not enough coffee beans!');
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
    }

    private preheat(): void {
      console.log('heating up... 🔥');
    }

    private extract(shots: number): CoffeeCup {
      console.log(`Pulling ${shots} shots... ☕️`);
      return {
        shots,
        hasMilk: false,
      };
    }

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      const coffee = this.extract(shots);
      const sugarAdded = this.sugar.addSugar(coffee);
      return this.milk.makeMilk(sugarAdded);
    }
  }

  //
  const cheapMilkMaker = new CheapMilkSteamer();
  const fancyMilkSteamer = new FancyMilkSteamer();
  const coldeMilkSteamer = new ColdMilkSteamer();
  const noMilk = new NoMilk();

  // Sugar
  const candySugar = new CandySugarMixer();
  const sugar = new SugarMixer();
  const noSugar = new NoSugar();
  //
  const sweetCandyMachine = new CoffeeMachine(12, noMilk, candySugar);
  const sweetMachine = new CoffeeMachine(12, noMilk, sugar);

  const latteMachine = new CoffeeMachine(12, cheapMilkMaker, noSugar);
  const coldLatteMachine = new CoffeeMachine(12, coldeMilkSteamer, noSugar);
  const sweetLatteMachine = new CoffeeMachine(12, cheapMilkMaker, candySugar);
}
