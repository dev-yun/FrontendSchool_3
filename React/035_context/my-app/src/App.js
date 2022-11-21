import React from 'react';
import { useContext } from 'react';
import { data } from './data';

// 문제 : props를 사용하지 마시고 data.js 변수를 load해와서
// useContext를 사용하여 다음을 구현합니다.
// 1. Three에서는 7개 아이템에 이름만 출력합니다.
// 2. Four에서는 7개 아이템에 가격만 출력합니다.

// 7개 아이템의 가격만 출력합니다.
function Four() {
  const itemPrices = useContext(data).map((el) => el.price);
  return (
    <div>
      가격 목록
      {itemPrices.map((price, index) => (
        <p key={index}>{price}</p>
      ))}
    </div>
  );
}

// 7개 아이템의 이름만 출력합니다.
function Three() {
  const itemNames = useContext(data).map((el) => el.productName);
  return (
    <>
      이름 목록
      {itemNames.map((name, index) => (
        <p key={index}>{name}</p>
      ))}
      <Four />
    </>
  );
}

function Two() {
  return <Three />;
}

function One() {
  return <Two />;
}

function App() {
  return (
    <div>
      <One />
    </div>
  );
}

export default App;
