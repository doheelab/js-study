## redux-saga

- redux-saga는 redux-thunk 다음으로 가장 많이 사용되는 라이브러리

- redux-saga는 redux-thunk로 못하는 다양한 작업들을 처리 할 수 있습니다. 예를 들자면..

1. 비동기 작업을 할 때 기존 요청을 취소 처리 할 수 있습니다.
2. 특정 액션이 발생했을 때 이에 따라 다른 액션이 디스패치되게끔 하거나, 자바스크립트 코드를 실행 할 수 있습니다.
3. 웹소켓을 사용하는 경우 Channel 이라는 기능을 사용하여 더욱 효율적으로 코드를 관리 할 수 있습니다 (참고)
4. API 요청이 실패했을 때 재요청하는 작업을 할 수 있습니다.

## References

https://react.vlpt.us/redux-middleware/11-redux-saga-with-promise.html

https://min9nim.now.sh/2020-04-23-redux-saga/
