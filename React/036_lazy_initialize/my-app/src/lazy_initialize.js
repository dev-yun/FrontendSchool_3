import React, { useState } from 'react';

function getName() {
  console.log('오래기다리는중...');
  return '끝 !';
}

function App() {
  /**
   * 이렇게 사용하면 렌더링마다 getName 함수가 실행된다.
   * const [name, setName] = useState(getName())
   * 아래처럼 사용해야한다.
   */
  const [name, setName] = useState(() => {
    return getName();
  });
  const [num, setNum] = useState(0);

  return (
    <>
      <div>
        안녕하세요 {name}! 현재 숫자는{num}입니다
      </div>
      <button onClick={() => setNum((prevNum) => prevNum + 1)}>{num}</button>
    </>
  );
}

export default App;
