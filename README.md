# 계산기 만들기

- **반드시 아래 Setup과 Development 부분을 읽어보세요.**
- 안녕하세요 이승채 입니다.
- 문의는 id4720@gmail.com && 010-6639-4720로 주세요

## Setup (사전 설치)

Install dependencies

```sh
npm install
```

## Development (작업 방법)

```sh
React 시작하기
npm start
# Visit http://localhost:3000 from your browser (Chrome)
```

## 조건
1. input에 정수를 넣고 +버튼 or -버튼을 클릭시 result값이 변경
2. 새로고침시 result 값은 0으로 초기화
3. useState, useCallback, custom Hook 사용

## 작업 내용
1. App.tsx -> Counter.tsx 로 변경후 Counter 컴포넌트에 코드 작성
2. 커스텀훅은 hooks폴더 useCounter.ts로 작명후 코드 작성
3. 더하기, 빼기, 곱하기, 나누기 4가지 기능 구현

## 고민한점
1. 처음엔 Counter.tsx에 커스텀 훅도 넣을라 했으나 제어의 편의성 및 가독성을 위해 hooks 폴더에 따로 저장 하였습니다.

## 마무리
- 평상시 사용하는 코드 스타일로 작성해 보았습니다.
- 많이 부족하지만 재밌게 봐주십쇼. ㅎㅎ
