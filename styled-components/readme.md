

styled-components is the result of wondering how we could enhance CSS for styling React component systems. By focusing on a single use case we managed to optimize the experience for developers as well as the output for end users.

styled-components는 CSS를 React component나 HTML 태그에 적용하기 간편하게 적용하기 위한 기술입니다. 사용 예시는 다음과 같습니다.

```javascript
// Create a Title component that'll render an <h1> tag with some styles
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;
```

## props에 따라 스타일 변경하기  Adapting based on props

You can pass a function ("interpolations") to a styled component's template literal to adapt it based on its props.

스타일 컴포넌트에 함수를 전달하면 props에 따라 스타일을 변경할 수 있습니다.

This button component has a primary state that changes its color. When setting the primary prop to true, we are swapping out its background and text color.

다음의 버튼은 primary state에 따라서, 글자색과 배경색이 변경되도록 설정되었습니다.


```javascript
const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

render(
  <div>
    <Button>Normal</Button>
    <Button primary>Primary</Button>
  </div>
);
```