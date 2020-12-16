// 콜백 지옥 예제

class UserStorage {
  async loginUser(id, password) {
    setTimeout(() => {
      if (
        (id === 'ellie' && password === 'dream') ||
        (id === 'coder' && password === 'academy')
      ) {
        return id;
      } else {
        throw new Error('not found');
      }
    }, 2000);
  }

  async getRoles(user) {
    setTimeout(() => {
      if (user === 'ellie') {
        return { name: 'ellie', role: 'admin' };
      } else {
        throw new Error('no access');
      }
    });
  }
}

// class UserStorage {
//   loginUser(id, password) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         if (
//           (id === 'ellie' && password === 'dream') ||
//           (id === 'coder' && password === 'academy')
//         ) {
//           resolve(id);
//         } else {
//           reject(new Error('not found'));
//         }
//       }, 2000);
//     });
//   }
//   getRoles(user) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         if (user === 'ellie') {
//           resolve({ name: 'ellie', role: 'admin' });
//         } else {
//           reject(new Error('no access'));
//         }
//       });
//     });
//   }
// }

const userStorage = new UserStorage();
const id = prompt('enter your id'); // browser API
const password = prompt('enter your password');

userStorage
  .loginUser(id, password)
  .then(userStorage.getRoles)
  .then((userWithRole) => {
    alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role.`);
  })
  .catch(console.log);
