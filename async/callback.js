'use strict';
// JavaScript is synchronous - Execute the code block in order after hoisting.
// hoisting: var, function declaration이 가장 위로 올라감
// 비동기: 언제 코드가 실행될 지 예측할 수가 없는 것
// callback: (바로 실행되지 않고) 전달하여 나중에 다시 부르는 함수

// Synchronous callback
function printImmediately(print) {
  print();
}

printImmediately(() => console.log('hello'));

// Asynchronous callback
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}

printWithDelay(() => console.log('async callback'), 2000);

// 콜백 지옥 예제
class UserStorage {
  // 로그인
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === 'ellie' && password === 'dream') ||
        (id === 'coder' && password === 'academy')
      ) {
        onSuccess(id);
      } else {
        onError(new Error('not found'));
      }
    }, 2000);
  }

  // 역할을 가져와서 출력
  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === 'ellie') {
        onSuccess({ name: 'ellie', role: 'admin' });
      } else {
        onError(new Error('no access'));
      }
    });
  }
}

const userStorage = new UserStorage();
const id = prompt('enter your id'); // browser API
const password = prompt('enter your password');
userStorage.loginUser(
  id,
  password,
  (user) => {
    userStorage.getRoles(
      user,
      (userWithRole) => {
        alert(
          `Hello ${userWithRole.name}, you have a ${userWithRole.role} role.`
        );
      },
      (error) => {
        console.log(error);
      }
    );
  },
  (error) => {
    console.log(error);
  }
);

// 콜백 안에서 콜백 안에서... 콜백을 호출 -> 콜백지옥
// 문제점1. 읽기가 어렵다. 가독성이 떨어진다.
// 문제점2. 디버깅하기가 어렵다. 유지보수가 어렵다.
// Promise, async & await을 사용해서 병렬적으로 코딩하여 해결!
