{
  /**
   * Union Type: OR
   * 모든 가능한 케이스 중에 발생할 수 있는 하나를 담을 수 있는 타입
   */
  type Direction = 'left' | 'rignt' | 'up' | 'down';
  function move(direction: Direction) {
    console.log(direction);
  }

  move('down');

  type TileSize = 8 | 16 | 21;
  const tile: TileSize = 16;

  // function: login -> success, fail
  type SuccessState = {
    response: {
      body: string;
    };
  };

  type FailState = {
    reason: string;
  };

  type LoginState = SuccessState | FailState;

  function login(): LoginState {
    return {
      response: {
        body: 'logged in',
      },
    };
  }

  // printLoginState(state)
  // success -> body
  // fail -> reason

  function printLoginState(state: LoginState) {
    // void 생략 가능
    if ('response' in state) {
      console.log(state.response.body);
    } else {
      console.log(state.reason);
    }
  }
}
