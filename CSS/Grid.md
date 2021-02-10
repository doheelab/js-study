## Grid

- Flex는 한 방향 레이아웃 시스템 (1차원)

- Grid는 두 방향(가로-세로) 레이아웃 시스템 (2차원)

  - Flex보다 더 복합적인 레이아웃 표현이 가능

- display 설정: (display: grid;)

## Grid 크기 정의

- **grid-template-rows**는 행(row)의 배치

- **grid-template-columns**는 열(column)의 배치

```
grid-template-columns: 200px 200px 500px;
grid-template-columns: 1fr 1fr 1fr
grid-template-columns: repeat(3, 1fr)
```

- 설정값의 종류

  - repeat(반복횟수, 반복값): 반복되는 값을 자동으로 처리

    - 예) repeat(5, 1fr); repeat(3, 1fr 4fr 2fr);

  - minmax: 최솟값과 최댓값을 지정

    - 예) minmax(100px, auto): 최소값 100px, 최대는 자동으로(auto) 늘어남

- auto-fill, auto-fit: 정확한 아이템의 갯수를 알 수 없을 때 사용

  - repeat() 함수와 함께 사용

## 그리드의 형태를 자동으로 정의

- grid-template-columns(또는 grid-template-rows)의 통제를 벗어난 위치에 있는 트랙의 크기를 지정

- 횟수를 지정할 필요 없이 알아서 처리

## 간격 만들기

- row-gap, column-gap, gap

## 각 셀의 영역 지정

- 이 속성들은 Grid 아이템에 적용하는 속성으로, 각 셀의 영역을 지정

![cell](https://studiomeal.com/wp-content/uploads/2020/01/07-2.jpg)

## Reference

[이번에야말로 CSS Grid를 익혀보자] (https://studiomeal.com/archives/533)

[CSS Flexbox와 CSS Grid, 한번에 정리!] (https://www.youtube.com/watch?v=eprXmC_j9A4)
