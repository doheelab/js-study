## Routing

다른 주소에 따라 다른 뷰를 보여주는 것

## 기본 사용법

```javascript
  // 1. BrowserRouter 불러오기
  import { BrowserRouter } from 'react-router-dom'

  // 2. App 을 BrowserRouter 로 감싸기
  <BrowserRouter>
    <App />
  </BrowserRouter>

  // 3. 특정 주소에 컴포넌트 연결
  <Route path="/" component={보여주고자 하는 컴포넌트}/>

  // 4. Link 클릭 시 다른 주소로 이동
  <Link to="/">홈</Link>

```

- exact: 주소와 정확히 일치할 때만 매치

- component: load a component, 기본값

- component에 props 넘겨주는 방법 (Route에 추가하는 것 안됨)

```javascript
  // bad
  <Route path="/dashboard" component="{Dashboard}" isAuthed="{true}" />

  // good;
  // render: load a function, router를 통해 props를 넘겨줄 때 쓴다.
  <Route path="/dashboard" render={props => <Dashboard {...props} isAuthed="{true}"/>} />
```

## Link를 쓰는 이유

- `<a href="/">`를 이용하면, 모든 state가 초기화 된다. (reloading)

- `<Link to="/">`를 이용하면, 필요한 부분만 rerender한다.

- 혹은 `to={{pathname:"/new-post", hash: "#submit", search: "?quick-submit=true"}}`

## withRouter

- route component가 아닐 때, 부모 component의 routing params을 props으로 넘겨주기 위해 쓴다.

```javascript
import { withRouter } from 'react-router-dom';
...
export default withRouter(componentName)
```

## Absolute Path

- root domain에 직접 붙는 것 (default)

## Relative Path (dynamic path)

- `this.props.match.url + '/new-post'`

## NavLink

- extra props을 통해 active link의 styling 가능

- NavLink 사용시, `<a class="active">` 로 자동 설정; a.active로 스타일링 가능

  - `<NavLink to ="/", activeClassName="my-active">` : active class name 변경

- `<NavLink to ="/", activeStyle={{color: '#fa923f'}}>` : inline activte style

## Routing-Related Props

- match: isExact, params, path, url

- location: hash, pathname, search, state

- history: push,...

### match, params 사용 예시

```javascript
// Blog.js
<Route path="/posts" component={Posts} />

// Posts.js
<Route path={this.props.match.url + '/:id'} exact component={FullPost} /> // params로 id정보를 넘겨준다.

// FullPost.js
axios.get( '/posts/' + this.props.match.params.id ) // child component에서 params 접근
```

## Redirect & history.push

redirect: 현재 페이지를 대체한다.

history.push: 기록이 쌓인다.

```javascript
// 기본형
<Redirect from "/" to="/posts"/>

// Conditional
let redirect = null
if (this.state.summitted){
  redirect = <Redirect to="/posts"/>
}
return <div>... {redirect}</div>

// history.push
this.props.history.push('/posts')

```

## Parameter & Query

- 페이지 주소 정의 시 유동적인 값의 전달이 필요한 경우 사용

  - params: /profiles/velopert

  - query: /about?details=true

- 이를 사용하는 것에 대해 무조건적으로 따르는 규칙은 없다. 다만 일반적으로

  - params는 특정 id나 이름을 가지고 조회할 때 사용한다.

  - query는 어떤 키워드를 검색하거나, 요청 시 필요한 옵션의 전달에 사용한다.

## Query params

## Reference

https://muang-kim.tistory.com/53?category=835643

출처: https://rednose86.tistory.com/10 [빨강코의 블로그]

<!-- ## 파싱과 컴파일

> 파싱(Parsing) = 분리 - 해석

컴파일러가 소스파일을 실행가능한 형태로 번역하기 전에 소스파일을 의미있는 단어의 단위로 잘라서 해석하는 작업.

(예를 들어 'printf("hello")'라는 구문이 있다면 기계어로 바꾸기 전에 printf와 (, ", hello, ", )로 단어와 기호들을 하나씩 나누는 것. 그 후에 컴파일. 이때 라이브러리 등을 참고)

> 컴파일(Compile) = 번역

프로그래밍 언어로 되어 있는 소스파일을 컴퓨터가 실행가능한 기계어로 바꾸는 작업.

소스파일(텍스트파일)을 바이너리 파일로 바꿔준다. 컴퓨터 언어 코드인 0과 1로 바꾸는 작업. -->
