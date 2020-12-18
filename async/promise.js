'use strict';

// Promise is a JavaScript object for asynchronous operation.
// State -> 현재 상태를 알려준다.
// State: pending(operation 수행중) -> fulfilled(완료) or rejected(문제 발생)

//  1. Producer -> executer라는 콜백함수를 전달
// when new Promise is created, the executer runs automatically.
const promise = new Promise((resolve, reject) => {
  // doing some heavy work (network, read files) -> 비동기적으로 처리가 바람직함
  console.log('doing something...'); // promise를 만드는 순간 코드 실행된다.
  setTimeout(() => {
    resolve('ellie'); // 성공 시 실행
    //reject(new Error('no network')); // js object
  }, 2000);
});

// 2. Consumers: then, catch, finally
promise
  .then((value) => {
    // value: resolve에서 전달된 값
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log('finally'); // 성공하든 실패하든 항상 실행
  });

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

fetchNumber
  .then((num) => num * 2)
  .then((num) => num * 3)
  .then((num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    });
  })
  .then((num) => console.log(num)); // 5 출력

// 4. Error Handling (chaining 예시)
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve('닭'), 1000);
  });
const getEgg = (hen) =>
  new Promise((resolve, reject) => {
    // setTimeout(() => resolve(`${hen} => 달걀`), 1000);
    setTimeout(() => reject(new Error(`error ${hen} => '달걀`)), 1000);
  });
const cook = (egg) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 계란후라이`), 1000);
  });
getHen()
  .then(getEgg) //(hen) => getEgg(hen)
  .catch((error) => {
    return '빵'; // 위에서 문제가 생겼을 때 처리
  })
  .then(cook) // (egg) => cook(egg)
  .then(console.log); // (meal) => console.log(meal)
