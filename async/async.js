// async & await
// clear style of using promise :)

// function fetchUser() {
//   return new Promise((resolve, reject) => {
//     // do network request in 10 secs...
//     resolve('ellie');
//   });
// }

// 1. async라는 키워드를 함수 안에 쓰면, 함수가 자동으로 Promise로 변환된다.
async function fetchUser() {
  // do network request in 10 secs...
  return 'ellie';
}

const user = fetchUser();
user.then(console.log);

// 2. await - async 함수 내에서만 사용
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(1000); // delay가 끝날 때까지 기다려줍니다.
  return '사과';
}

async function getBanana() {
  await delay(1000);
  return '바나나';
}

// function getBanana() {
//   return delay(3000).then(() => '바나나');
// }

// 사과와 바나나를 따오는 함수
async function pickFruits() {
  const apple = await getApple();
  const banana = await getBanana();
  return `${apple} + ${banana}`;
}

// function pickFruits() {
//   return getApple().then((apple) => {
//     return getBanana().then((banana) => `${apple}+${banana}`);
//   });
// }

pickFruits().then(console.log);

// 병렬적 실행 1 : async 활용
async function pickAllFruits() {
  const applePromise = getApple();
  const bananaPromise = getBanana();
  const apple = await applePromise;
  const banana = await bananaPromise;
  return `${apple} + ${banana}`;
}

// 병렬적 실행 2 : Promise.all 활용
function pickAllFruits() {
  return Promise.all([getApple(), getBanana()]).then((fruits) =>
    fruits.join(' + ')
  );
}
pickAllFruits().then(console.log);

// 둘 중 먼저 선택되는 하나를 고르기
function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()]);
}
pickOnlyOne().then(console.log);
