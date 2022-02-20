# 장바구니 UI 개발 과제

<img src="https://user-images.githubusercontent.com/77285472/154837170-d83bf13a-22b3-4e88-a113-3bb1b03d74b3.gif" width="640">

## 설치 및 실행

node.js v16.14.0 / yarn 1.22.10

```bash
git clone https://github.com/SeheeYun/cart-sample.git

yarn install

yarn start
```

## 기술 스택

- TypeScript
- React
- React-Router

## 과제 목표

장바구니에 결제 아이템 추가 및 결제 금액 계산

## 과제 구현 사항

- [x] `item`, `discount`는 각각 장바구니로 추가/삭제 가능
- [x] 동일한 아이템을 장바구니로 담을 수 없음
- [x] `item`의 수량 선택 가능 eg. `item x 3`
- [x] `discount`의 할인 대상 `item`을 선택하지 않으면 장바구니에 담긴 모든 `item`을 할인 적용
- [x] `discount`의 할인 대상 `item`을 선택한 경우 선택한 항목만 할인 적용
- [x] 장바구니에 담긴 내용이 변경될 때 마다 사용자에게 최종 금액을 표시
- [ ] 최종 금액은 `currency_code`에 따라 표시
  - `USD`: $13.40
  - `KRW`: 30000원
