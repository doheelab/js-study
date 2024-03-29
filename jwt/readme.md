---
title: 'JWT(JSON Web Token)를 활용한 권한 부여(authentication)'
date: 2021-04-07 09:00:00 -0400
categories: web-development
tags: [jwt, json-web-token, authentication, authorization, web-development, server, client, security]
---


`JWT`는 특정 유저에게 `권한 부여(authorization)`를 하기 위한 방법 중 하나입니다. 
서버는 HTTP 요청을 받았을 때, 요청한 유저가 이미 `인증(ID와 패스워드가 맞는 지 확인, authentication)`을 한 유저인지 `JWT`를 통해 확인 후 알맞은 권한을 부여합니다. 따라서 `JWT`는 권한 부여를 위한 방법 중 하나입니다.

## 세션(session)을 통한 권한 부여

`권한 부여(authorization)`을 위한 가장 일반적은 방법은 `세션(session)`을 통한 방법입니다. 서버는 인증 과정에서 유저의 `session ID`를 생성하여 클라이언트에게 전달합니다. 클라이언트는 `session ID`를 쿠키에 저장하고 있고, `request`할 때마다 `session ID`를 헤더에 실어 보냅니다. 요청받은 서버는 `session ID`를 서버의 메모리에 저장된 `session ID`와 비교하여 존재한다면 요청을 받아들입니다.

![image](https://user-images.githubusercontent.com/71360682/113804050-b4dae680-9798-11eb-8888-2eef4e705ade.png)

<div align="center">
  <i>Session diagram from Web Dev Simplified </i>
</div>

<br/>

- 장점

  - 쿠키가 담긴 HTTP 요청이 도중에 노출되더라도 쿠키 자체(세션 ID)는 유의미한 값을 가지고 있지 않습니다.

  - 고유의 세션 ID를 통해 회원정보를 재확인할 필요 없이 누구인지 바로 알 수 있습니다.

- 단점

    - 만일 HTTP 요청을 해커가 가로챈다면, 그 안에 들어있는 쿠키를 훔쳐서 HTTP 요청을 보낼 수 있습니다 (하이재킹 공격). 해결책은 HTTPS를 사용해 HTTP 요청을 탈취해도 안의 정보를 읽기 힘들게 하는 방법과, 세션에 유효기간을 넣어주는 방법이 있습니다.


    - 서버에서 세션 ID를 저장하기 위한 추가적인 공간이 필요합니다.


## JWT를 통한 인증과 인가

JWT는 `session` 대신에 JSON Web Token(JWT)을 활용합니다. 인증 과정에서 서버는 유저정보와 `secret key`를 사용해서 `JWT`를 생성하고 클라이언트에 보내줍니다. 클라이언트는 쿠키(혹은 다른 곳)에 `JWT`를 저장하고, `HTTP 요청`할 때마다 `JWT`를 실어서 보냅니다. 요청을 받은 서버는 `JWT`가 변조되었는지를 확인하고, 변조되지 않았다면 요청을 받아들입니다.

![image](https://user-images.githubusercontent.com/71360682/113804110-da67f000-9798-11eb-896e-51f6a0528def.png)

<div align="center">
  <i>JWT diagram from Web Dev Simplified </i>
</div>

<br/>

- 장점

    - 서버는 JWT를 발급한 후 검증만 하면 되기 때문에 추가 저장소가 필요 없습니다.
    - 여러 서버로 확장하는 데에 유리합니다.

- 단점
  
    - 한 번 발급된 JWT는 유효기간이 완료될 때까지 계속 사용이 가능합니다. (악의적인 유저가 사용할 수 있음)
    - Payload 정보는 누구나 읽을 수 있기 때문에, 중요한 정보를 담을 수 없습니다. 
  

## 세션과 JWT의 차이

- `session`: 유저에 대한 정보가 서버에 저장됩니다.

- `JWT`: 유저에 대한 정보가 `토큰(JWT)`에 저장됩니다. 즉, 클라이언트에 저장됩니다.
서버는 아무것도 저장할 필요가 없기 때문에, 하나의 `JWT`를 여러 서버에서 사용할 수 있게 됩니다. 하나의 어플리케이션에서 여러대의 서버에 접근해야하거나, `load balancer`를 통해 여러 대의 서버에 작업을 나눠줄 때, JWT를 사용하면 서버마다 매번 로그인하지 않아도 됩니다. 

## JWT의 구성요소

JWT는 Header, Payload, Signature로 구성되어 있습니다. 각 파트는 `.`으로 구분됩니다.


|       파트       |  역할   |
| :----------------: | :-----: |
| **Header** | 인코딩 알고리즘 및 토큰 타입(JWT)|
|  **Payload**  |  `request`에 대한 데이터  <br> `sub(subject, user id)`: 유저의 id <br> `iat(issued at), exp or eat(expired at)`: 유효기간 |
| **Signature**  |  `Header`와 `Payload`의 정보를 `secret key`를 통해 인코딩한 결과  |


<div align="center">
  <i>JWT의 구성요소</i>
</div>

<br/>

<div style="text-align:center"><img src="https://user-images.githubusercontent.com/71360682/113804693-09329600-979a-11eb-9323-a129a91c1bdf.png" /></div>

<div align="center">
  <i>Image from jwt.io</i>
</div>

<br/>


## 클라이언트의 JWT 저장 방법

서버에서 토큰을 발급해주면, 클라이언트가 토큰을 저장하는 방법은 크게 두 가지가 있습니다.


1. **local/session storage**

동일한 도메인의 JavaScript를 통해 접근할 수 있으므로 `XSS`(크로스 사이트 스크립팅, 해커가 악성 스크립트를 삽입하여 쿠키를 탈취)공격에 취약합니다.

2. **Cookies**

쿠키는 `http-only` 플래그를 사용해 암호화된 쿠키가 `https` 통신할 때만 사용하게 설정해 XSS의 문제(JS로 토큰값에 접근)를 완화시킬 수 있습니다. 하지만` CSRF`(사이트 간 요청 위조) 공격의 위험이 있습니다. 다만 `CSURF` 등의 라이브러리를 사용하면 예방할 수 있기 때문에 보통 쿠키 사용을 권장합니다.

## 참고자료 

[1] [What Is JWT and Why Should You Use JWT](https://www.youtube.com/watch?v=7Q17ubqLfaM)

[2] [4장. JWT 이해 및 적용](https://backend-intro.vlpt.us/4/)

[3] [세션 기반 인증 방식과 토큰 기반 인증](https://yonghyunlee.gitlab.io/node/jwt/)
