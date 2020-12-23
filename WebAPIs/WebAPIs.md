# API의 개념

API (응용 프로그래밍 인터페이스)는 개발자가 복잡한 기능을보다 쉽게 만들 수 있도록 프로그래밍 언어를 통해 제공되는 구조물.

<br>

## Javascript APIs의 구분

### Browser APIs

브라우저에 속해 있으며 브라우저와 주변 환경으로부터 데이터를 추출하여 동작한다.
예) Web Audio API: 브라우저의 오디오를 조정(볼륨, 배경음악 등)

<br>

### Third-party APIs

브라우저에 속하지 않으며 웹을 통해 정보를 가져와서 동작한다.
예) Twitter, Facebook API

<br>

### Brower APIs의 구분

- APIs for manipulating documents

예) DOM (Document Object Model) API: HTML과 CSS를 조정하는 (생성, 삭제, 변경) 역할을 담당

- APIs that fetch data from the server - 서버와 통신

예) Fetch API, XMLHttpRequset (reload 없이 웹페이지의 일부만 변경 - Ajax)

- APIs for drawing and manipulating graphics

- Audio and Video APIs - 멀티미니어 관련

- Device APIs - 디바이스의 상태정보를 불러옴

<br>

출처 - [Introduction to web APIs](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Introduction#They_are_based_on_objects)

<br>

# HTTP (Hypertext Transfer Protocol)

웹을 통해 기기 간에 데이터를 주고받기 위해 정의한 프로토콜 프(상호 간에 정의한 규칙)

상태가 없는(stateless): 데이터 요청이 서로 독립적으로 관리( 이전 데이터 요청과 다음 데이터 요청이 관련 없음)

<br>

# REST APIs

## REST의 탄생

REST는 **RE**presentational **S**tate **T**ransfer의 약자

HTTP의 주요 저자인 로이 필딩이 HTTP의 장점을 최대한 활용할 수 있는 아키텍처로서 REST를 발표

<br>

## REST의 구성

- 자원(RESOURCE) - URI
- 행위(Verb) - HTTP METHOD
- 표현(Representations)

## REST의 특징

1. Uniform (유니폼 인터페이스)

Uniform Interface는 URI로 지정한 리소스에 대한 조작을 통일되고 한정적인 인터페이스로 수행하는 아키텍처 스타일을 말합니다.

2. Stateless (무상태성)

REST는 무상태성 성격을 갖습니다. 다시 말해 작업을 위한 상태정보를 따로 저장하고 관리하지 않습니다. 세션 정보나 쿠키정보를 별도로 저장하고 관리하지 않기 때문에 API 서버는 들어오는 요청만을 단순히 처리하면 됩니다. 때문에 서비스의 자유도가 높아지고 서버에서 불필요한 정보를 관리하지 않음으로써 구현이 단순해집니다.

3. Cacheable (캐시 가능 - 임시저장)

REST의 가장 큰 특징 중 하나는 HTTP라는 기존 웹표준을 그대로 사용하기 때문에, 웹에서 사용하는 기존 인프라를 그대로 활용이 가능합니다. 따라서 HTTP가 가진 캐싱 기능이 적용 가능합니다. HTTP 프로토콜 표준에서 사용하는 Last-Modified태그나 E-Tag를 이용하면 캐싱 구현이 가능합니다.

4. Self-descriptiveness (자체 표현 구조)

REST의 또 다른 큰 특징 중 하나는 REST API 메시지만 보고도 이를 쉽게 이해 할 수 있는 자체 표현 구조로 되어 있다는 것입니다.

5. Client - Server 구조

REST 서버는 API 제공, 클라이언트는 사용자 인증이나 컨텍스트(세션, 로그인 정보)등을 직접 관리하는 구조로 각각의 역할이 확실히 구분되기 때문에 클라이언트와 서버에서 개발해야 할 내용이 명확해지고 서로간 의존성이 줄어들게 됩니다.

6. 계층형 구조

REST 서버는 다중 계층으로 구성될 수 있으며 보안, 로드 밸런싱, 암호화 계층을 추가해 구조상의 유연성을 둘 수 있고 PROXY, 게이트웨이 같은 네트워크 기반의 중간매체를 사용할 수 있게 합니다.

<br>

## 4. REST API 디자인 가이드

- URI는 정보의 자원을 표현해야 한다.
- 자원에 대한 행위는 HTTP Method(GET, POST, PUT, DELETE)로 표현한다.

> URI는 정보의 자원을 표현해야 한다. (리소스명은 동사보다는 명사를 사용)

```
GET /members/delete/1
```

위와 같은 방식은 REST를 제대로 적용하지 않은 URI입니다. URI는 자원을 표현하는데 중점을 두어야 합니다. delete와 같은 행위에 대한 표현이 들어가서는 안됩니다.

```
 DELETE /members/1
```

자원에 대한 행위는 HTTP Method(GET, POST, PUT, DELETE 등)로 표현합니다.

## 4.1 METHOD 역할

| Method | 내용                                                 |
| ------ | ---------------------------------------------------- |
| POST   | POST를 통해 해당 URI를 요청하면 리소스를 생성합니다. |
| GET    | GET를 통해 해당 리소스를 조회합니다.                 |
| PUT    | PUT를 통해 해당 리소스를 수정합니다.                 |
| DELETE | DELETE를 통해 리소스를 삭제합니다.                   |

<br>

## 4-2. URI 설계 시 주의할 점

1. 슬래시 구분자(/)는 계층 관계를 나타내는 데 사용

2. URI 마지막 문자로 슬래시(/)를 포함하지 않는다.

3. 하이픈(-)은 URI 가독성을 높이는데 사용 - 가독성 향상

4. 밑줄(\_)은 URI에 사용하지 않는다. - 가독성 저하 우려

5. URI 경로에는 소문자가 적합하다. - 대소문자에 따라 다른 리소스로 인식

6. 파일 확장자는 URI에 포함시키지 않는다.

## 4-3. 리소스 간의 관계를 표현하는 방법

REST 리소스 간에는 연관 관계가 있을 수 있고, 이런 경우 다음과 같은 표현방법으로 사용합니다.

```
    /리소스명/리소스 ID/관계가 있는 다른 리소스명

    ex)    GET : /users/{userid}/devices (일반적으로 소유 ‘has’의 관계를 표현할 때)
```

만약에 관계명이 복잡하다면 이를 서브 리소스에 명시적으로 표현하는 방법이 있습니다. 예를 들어 사용자가 ‘좋아하는’ 디바이스 목록을 표현해야 할 경우 다음과 같은 형태로 사용될 수 있습니다.

```
    GET : /users/{userid}/likes/devices (관계명이 애매하거나 구체적 표현이 필요할 때)
```

<br>

## 4-4. 자원을 표현하는 Colllection과 Document

Collection과 Document에 대해 알면 URI 설계가 한 층 더 쉬워집니다. DOCUMENT는 단순히 문서로 이해해도 되고, 한 객체라고 이해하셔도 될 것 같습니다. 컬렉션은 문서들의 집합, 객체들의 집합이라고 생각하시면 이해하시는데 좀더 편하실 것 같습니다. 컬렉션과 도큐먼트는 모두 리소스라고 표현할 수 있으며 URI에 표현됩니다. 예를 살펴보도록 하겠습니다.

```
    http:// restapi.example.com/sports/soccer
```

위 URI를 보시면 sports라는 컬렉션과 soccer라는 도큐먼트로 표현되고 있다고 생각하면 됩니다. 좀 더 예를 들어보자면

```
    http:// restapi.example.com/sports/soccer/players/13
```

sports, players 컬렉션과 soccer, 13(13번인 선수)를 의미하는 도큐먼트로 URI가 이루어지게 됩니다. 여기서 중요한 점은 **컬렉션은 복수로** 사용하고 있다는 점입니다. 좀 더 직관적인 REST API를 위해서는 컬렉션과 도큐먼트를 사용할 때 단수 복수도 지켜준다면 좀 더 이해하기 쉬운 URI를 설계할 수 있습니다.

<br>

## 5. HTTP Status Code

| 상태코드 | 내용                                                                                            |
| -------- | ----------------------------------------------------------------------------------------------- |
| 200      | 클라이언트의 요청을 정상적으로 수행함                                                           |
| 201      | 클라이언트가 어떠한 리소스 생성을 요청, 해당 리소스가 성공적으로 생성됨(POST를 통한 리소스 생성 |

| 상태코드 | 내용                                                                                      |
| -------- | ----------------------------------------------------------------------------------------- |
| 400      | Bad Request, 잘못된 요청                                                                  |
| 401      | Unauthorized, 권한 없이 요청. Authorization 헤더가 잘못된 경우                            |
|          | (로그인 하지 않은 유저가 로그인 했을 때, 요청 가능한 리소스를 요청했을 때)                |
| 403      | Forbidden, 사용자의 권한으로 리소스를 사용할 수 없음                                      |
|          | (403 보다는 400이나 404를 사용할 것을 권고. 403 자체가 리소스가 존재한다는 뜻이기 때문에) |
| 404      | Not Found (실패, 데이터가 있어야 하나 없음)                                               |
| 405      | Method Not Allowed, 허용되지 않은 메서드                                                  |

| 상태코드 | 내용                                                                      |
| -------- | ------------------------------------------------------------------------- |
| 301      | 클라이언트가 요청한 리소스에 대한 URI가 변경 되었을 때 사용하는 응답 코드 |
|          | (응답 시 Location header에 변경된 URI를 적어 줘야 합니다.)                |
| 500      | 서버에 문제가 있을 경우                                                   |

---

출처 - [REST API 제대로 알고 사용하기](https://meetup.toast.com/posts/92)

---

<br>

# OpenAPI

OpenAPI: API를 위한 표준 명세 규격 (yarm, json)

Swagger: API 문서 작성을 위한 서비스

![Swagger](https://i.stack.imgur.com/oMwNE.png)
