{
  // 예상할 수 있는 상태(성공 상태, 실패 상태)를 타입으로 정의하는 것이 깔끔하고 안정적인 프로그래밍을 할 수 있게 해줌
  type NetworkErrorState = {
    result: 'fail';
    reason: 'offline' | 'down' | 'timeout';
  };

  type SuccessState = {
    result: 'success';
  };

  type ResultState = SuccessState | NetworkErrorState;

  class NetworkClient {
    tryConnect(): ResultState {
      // throw new Error('no network!');
      return {
        result: 'fail',
        reason: 'timeout',
      };
    }
  }

  class UserService {
    constructor(private client: NetworkClient) {}

    login() {
      this.client.tryConnect();
    }
  }

  // 조금 더 의미있는 에러 처리를 하기 위해 App에서 에러처리를 하는 게 나음
  class App {
    constructor(private userService: UserService) {}
    run() {
      try {
        this.userService.login();
      } catch (error) {
        // error: any
        // show dialog to user
        // if (error instanceof OfflineError) {}  // any 타입이기 때문에 타입 검사를 못 함
      }
    }
  }

  const client = new NetworkClient();
  const service = new UserService(client);
  const app = new App(service);
  app.run();
}
