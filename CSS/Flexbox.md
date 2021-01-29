# Key 1: container에 적용되는 속성, item에 적용되는 속성이 있다

# Key 2: 중심축(main)과 수직축(cross)이 있다

## 1. container 에 적용되는 속성

- display: flex로 설정

- flex-direction: 중심축을 설정

  - row: 왼쪽에서 오른쪽

  - row-reverse: 오른쪽에서 왼쪽

  - column: 위에서 아래로

  - column-reverse: 아래에서 위로

- flex-wrap: 컨테이너가 더 이상 아이템들을 한 줄에 담을 여유 공간이 없을 때 아이템 줄바꿈을 어떻게 할지 결정하는 속성

  - nowarp: 한줄에 빼곡히 붙어있다.

  - warp: 한줄에 꽉차면 다음 라인으로 넘어간다.

- flex-flow: flex-direction과 flex-wrap을 한꺼번에 지정

- justify-content: 중심축에서 아이템을 배치하는 속성

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

- align-content: flex-wrap: wrap;이 설정된 상태에서, 아이템들의 행이 2줄 이상 되었을 때의 수직축 방향 정렬을 결정하는 속성

  - justify-content의 속성을 모두 사용할 수 있다.

## 2. item에 적용되는 속성

- order: 순서를 지정할 수 있음

- flex-grow: 얼마나 늘어날지

- flex-shrink: 얼마나 줄어들지

- flex-basis: 차지하는 비율 지정

- algin-self: 아이템 별로 정렬

# Key 2: 중심축(main)과 수직축(cross)이 있다

# percentage, vh

- percentage(%): 부모의 100%를 채운다.

- vh: 보이는 것에 100% 쓴다.

# References

https://www.youtube.com/watch?v=7neASrWEFEM&t=491s

[이번에야말로 CSS Flex를 익혀보자] https://studiomeal.com/archives/197

[A Complete Guide to Flexbox] https://css-tricks.com/snippets/css/a-guide-to-flexbox/

[Color Tool] https://material.io/resources/color/
