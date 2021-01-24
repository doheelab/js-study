## 1. Rules of Reducers

- 'undefined' 을 리턴할 수 없다.

- previous state, action을 받아 새로운 state를 생성한다.

- reducers are pure (함수 밖(DOM, network request)의 정보를 활용하면 안된다)

- must not mutate the input state

## 2. Mutations in Javascript

- mutation examples

1. array : push, pop, change elements,...

2. object : change values

- primative values are immutable : strings and numbers

## 3. Mutation in Redux

source code : https://github.com/reduxjs/redux/blob/master/src/combineReducers.ts

1. line 199 : undefined를 리턴하면 에러 발생

2. line 204 : immutable 업데이트가 필요한 이유

## 4. Safe state updates in reducers

```

1. state.pop() => state.filter(element => element!=='hi')

2. state.push('hi') => [...state, 'hi']

3. state[0] = 'bye' => state.map(el => el === "hi" ? 'bye' : el)

4. state.name = 'Sam' => {...state, name:'Sam'}

5. state.age = 30 => {...state, age: 30}

6. delete state.name =>

a) {...state, age: undefined}: age가 undefined로 남아있음

b) _.omit(state, 'age')

c) const { name, ...state2 } = state;

d) const state2 = Object.assign({}, state)
   delete state2.name

```

## 5.
