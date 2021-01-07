## 기존 fetchPost 의 문제점

- action creators must return plain object: async, await 때문에 먼저 request object를 return 한다.

- action이 실행될 때, 데이터를 가져오기 전 상태이다.

## What is middleware?

- 모든 action이 reducer에 전달되기 전에, middleware를 거친다.

- ability to stop, modify action

## What is redux-thunk ?

- The middleware to help us make requests in a redux application.

- all purpose middleware including dealing with action creators.

## Rules with Redux Thunk

- allows action creator to return either an **objects** or **function**.

- automatically call the function

## Source Code

https://github.com/reduxjs/redux-thunk/blob/master/src/index.js
