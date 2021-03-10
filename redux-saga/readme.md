## Redux-Saga

- redux에서 비동기 처리를 하기 위한 redux middleware

- 액션을 모니터링하고 있다가, 특정 액션이 발생하면 이에 따라 특정 작업을 하는 방식으로 사용합니다.

## redux-thunk

- 함수를 디스패치 할 수 있게 해주는 middleware

- action creator가 action 대신 함수를 반환한다.
- 디버깅 테스트가 어렵다.

## redux-saga

- action creator가 action object를 반환한다.

- 디버깅, 테스트가 쉽다.

- 비동기 작업을 할 때 기존 요청을 취소 처리 할 수 있습니다.

- 특정 액션이 발생했을 때 이에 따라 다른 액션이 디스패치되게끔 하거나, 자바스크립트 코드를 실행 할 수 있습니다.

- API 요청이 실패했을 때 재요청하는 작업을 할 수 있습니다.

## Side Effect

- (자바스크립트) 코드가 외부 세계에 영향을 주거나 받는 것

- redux-saga는 side effect를 관리하기 용이하게 함

## Generator

- Iterator는 next를 사용해서 다음 값 생성하는 object

- Generator는 Iterator를 생성해주는 함수

- Callee vs Caller

Callee (Generator function, Saga)

```javascript
function* myGeneratorFunction() {
  yield 1;
  yield 2;
  yield 3;
}
```

Caller (Runner)

```javascript
const generator = myGeneratorFunction();

console.log(generator.next().value); // 1
console.log(generator.next().value); // 2
console.log(generator.next().value); // 3
```

## Saga

(Redux-Saga README)

> "The mental model is that a **saga** is like a separate thread in your application that's solely responsible for side effects."

Saga는 Generator function이 되고, Redux-Saga Middleware는 Runner가 된다.

![image](https://user-images.githubusercontent.com/57972646/110562587-28cfa200-818d-11eb-8d5a-9e79ca5d8ed7.png)

## Effect

middle에 의해 수행되는 명령을 담고 있는 object

Saga는 effect를 yield하고, middleware는 effect를 처리

### Blocking Effect

동기적 실행 (take(dispatch), call 등)

### Non-blocking Effect

비동기적 실행 (put(dispatch), fork 등)

![image](https://user-images.githubusercontent.com/57972646/110563641-f0c95e80-818e-11eb-92d8-0808d8323e2c.png)

## Readme

https://min9nim.now.sh/2020-04-23-redux-saga/

https://mskims.github.io/redux-saga-in-korean/introduction/BeginnerTutorial.html
