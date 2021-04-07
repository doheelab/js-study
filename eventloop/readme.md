## 프로세스(Process)

운영체제 위에서 독립적으로 메모리에서 실행되고 있는 프로그램을 말한다.

프로세스마다 할당된 메모리나 데이터가 지정되어 있다.

프로세스는 

- code: 프로그램을 실행하기 위한 코드

- stack: 함수의 실행 순서에 대한 정보
 
- heap: object나 data가 저장되는 공간 (동적 할당)
  
- data: 전역 변수, static 변수

## 쓰레드(Thread)

한 프로세스 안에서 다양한 일을 동시에 할 수 있게 함

쓰레드마다 고유의 스택이 할당

프로세스에 지정된 코드, 힙, 데이터를 공유

예) 음악 재생 프로그램의 경우 - 음악을 재생하는 thread, 사진을 편집하는 thread, 서버와 통신하는 thread

## 멀티 스레딩

한 프로세스 안에서 여러 스레드를 사용하는 것

Java: 멀티스레딩을 지원

JS: 싱글 스레드 언어

브라우저에는 여러 스레드가 들어있다.

JS가 동작하는 실행환경에서는 멀티스레딩과 이벤트 루프를 이용해서 다양한 동작을 실행할 수 있다.

## JS 엔진

- Memory Heap: 변수를 선언, 문자, 숫자 할당 시 저장

- Call Stack: 함수를 실행하는 순서에 따라 스택에 쌓는다.

## Task Queue (callback queue)

WebAPI에 지정된 이벤트가 발생했을 때 `콜백함수`를 Task Queue에 넣어준다.

## Microtask Queue

Promise에 등록된 콜백, 즉 프로미스가 다 수행이 되고 나면 `then`에 등록한 `콜백함수`가 들어온다.

## Render

코드 변경 시 주기적으로 화면에 업데이트 하는 것

- Request Animation Frame, Render Tree, Layout, Paint로 구성

## Event Loop

Task Queue와 Call Stack을 계속 감시한다.

**Call Stack이 비워질 때까지 기다린 후**, Event Loop에 있는 것을 하나씩 Call Stack으로 이동시킨다.

예) Click시 WebAPI는 click을 task queue에 삽입하고, call stack이 비워지면 하나씩 이동시킨다.

Event loop는 **Microtask Queue**, **Render**도 감시한다.

진행순서

- (Call Stack) 수행중인 함수가 있다면 기다린다.

- (Render) 60 fps에 맞게 Render을 업데이트 할 수도 있고, 그냥 지나칠 수 있다.

- (Microtask Queue) 아이템이 있다면 하나씩 Call Stack으로 가져간다. (Microtask Queue 안에 들어있는 아이템이 모두 없어질 때까지)

- (Task Queue) 한 번에 하나의 아이템을 Call Stack으로 가져온다.