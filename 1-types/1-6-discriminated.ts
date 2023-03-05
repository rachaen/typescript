{
  type SuccessState = {
    result: 'success';
    response: {
      body: string;
    };
  };

  type FailState = {
    result: 'fail';
    reason: string;
  };

  type LoginState = SuccessState | FailState;

  function login(): LoginState {
    return {
      result: 'success',
      response: {
        body: 'logged in',
      },
    };
  }
  function printLoginState(state: LoginState) {
    if (state.result === 'success') {
      console.log(state.response.body);
    } else {
      console.log(state.reason);
    }
  }
}

/**
1.
터미널에서 현재 경로에서 tsc --init을 하셔서 tsconfig.json 파일이 생기면
target을 es6로 그리고 strict이 true로 되어 있는지 확인해 보세요

2.
또는 그냥 블럭 앞에 네임스페이스를 추가해 주시면 되어요
namespace Union {
    ... 코드들
}
 */
