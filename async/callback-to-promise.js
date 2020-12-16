// 콜백 지옥 예제

class UserStorage {
  // 로그인 - 더 이상 callback을 전달받지 않아서 깔끔해졌다.
  loginUser(id, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (
          (id === 'ellie' && password === 'dream') ||
          (id === 'coder' && password === 'academy')
        ) {
          resolve(id);
        } else {
          reject(new Error('not found'));
        }
      }, 2000);
    });
  }
  // 역할을 가져와서 출력
  getRoles(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user === 'ellie') {
          resolve({ name: 'ellie', role: 'admin' });
        } else {
          reject(new Error('no access'));
        }
      });
    });
  }
}

const userStorage = new UserStorage();
const id = prompt('enter your id'); // browser API
const password = prompt('enter your password');
// userStorage.loginUser(
//   id,
//   password,
//   (user) => {
//     userStorage.getRoles(
//       user,
//       (userWithRole) => {
//         alert(
//           `Hello ${userWithRole.name}, you have a ${userWithRole.role} role.`
//         );
//       },
//       (error) => {
//         console.log(error);
//       }
//     );
//   },
//   (error) => {
//     console.log(error);
//   }
// );

userStorage
  .loginUser(id, password)
  .then(userStorage.getRoles)
  .then((userWithRole) => {
    alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role.`);
  })
  .catch(console.log);

// async와 await을 활용하여 더 깔끔하게 코딩할 수 있다!
