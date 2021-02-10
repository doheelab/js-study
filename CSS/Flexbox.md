## flexbox란?

- Flexible Box module은 flexbox 인터페이스 내의 아이템 간 공간 배분과 강력한 정렬 기능을 제공하기 위한 1차원 레이아웃 모델

- flexbox를 1차원이라 칭하는 것은, 레이아웃을 다룰 때 한 번에 하나의 차원(행이나 열)만을 다룬다는 뜻입니다. 이는 행과 열을 함께 조절하는 CSS 그리드 레이아웃의 2차원 모델과는 대조됩니다.

## key 1: container에 적용되는 속성, item에 적용되는 속성이 있다

## key 2: 중심축(main)과 수직축(cross)이 있다

## 1. container 에 적용되는 속성

- display: flex로 설정

- flex-direction : 중심축을 설정 (default: row)

  - row: 왼쪽에서 오른쪽

  - row-reverse: 오른쪽에서 왼쪽

  - column: 위에서 아래로

  - column-reverse: 아래에서 위로

- flex-wrap: 컨테이너가 더 이상 아이템들을 한 줄에 담을 여유 공간이 없을 때 아이템 줄바꿈을 어떻게 할지 결정하는 속성 (default: nowrap)

  - nowrap: 한줄에 빼곡히 붙어있다.

  - wrap: 한줄에 꽉차면 다음 라인으로 넘어간다.

- flex-flow: flex-direction과 flex-wrap의 축약형 속성

  - flex-flow: row wrap;

- justify-content: 중심축에서 아이템을 배치하는 속성 (default: flex-start)

  - flex-start: 시작부터 배치

  - flex-end: 끝부터 배치

  - center: 가운데로 정렬

  - space-around: 아이템들의 “둘레(around)”에 균일한 간격을 만들어 줍니다.

  - space-evenly: 아이템들의 사이와 양 끝에 균일한 간격을 만들어 줍니다.

  - space-between: 아이템들의 “사이(between)”에 균일한 간격을 만들어 줍니다.

![justify-content-space](https://studiomeal.com/wp-content/uploads/2020/01/10-1.jpg)

- align-items: 수직축에서 아이템을 배치하는 속성

  - center: 중심에 배치

  - baseline: 텍스트의 위치를 맞춰준다.

  - justify-content의 속성을 모두 사용할 수 있다.

- align-content: wrap이 설정된 상태에서, 아이템들의 행이 2줄 이상 되었을 때의 수직축 방향 정렬을 결정하는 속성

## 2. item에 적용되는 속성

- order: 순서를 지정할 수 있음

- flex-grow: 얼마나 늘어날지 (default: 0)

- flex-shrink: 얼마나 줄어들지 (default: 1)

- flex-basis: 항목의 크기를 결정 (default: auto), flex 항목에 크기가 지정되어 있지 않으면 내용물 크기가 flex-basis 값으로 사용

- flex: flex-grow, flex-shrink, flex-basis 값을 축약적으로 지정

  - flex: initial (default, 0 1 auto); 공간이 모자라면 크기가 줄어듦

  - flex: auto (1 1 auto); 여유 공간이 있을 때 늘어남

  - flex: none (0 0 auto); 항목의 크기가 고정

  - flex: 1 (1 0 auto); flex-grow만 지정

- align-self: 아이템 별로 cross axis에 대한 정렬 설정

  - auto (default): align-items를 상속

  - 나머지는 align-items와 동일

# References

[드림코딩] https://www.youtube.com/watch?v=7neASrWEFEM&t=491s

[이번에야말로 CSS Flex를 익혀보자] https://studiomeal.com/archives/197

[A Complete Guide to Flexbox] https://css-tricks.com/snippets/css/a-guide-to-flexbox/

[MDN: flexbox의 기본개념] https://developer.mozilla.org/ko/docs/Web/CSS/CSS_Flexible_Box_Layout/Flexbox%EC%9D%98_%EA%B8%B0%EB%B3%B8_%EA%B0%9C%EB%85%90

[Color Tool] https://material.io/resources/color/

[selector 게임] https://flukeout.github.io/

[Flexbox Froggy] https://flexboxfroggy.com/#ko
