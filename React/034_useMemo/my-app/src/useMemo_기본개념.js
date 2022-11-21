import React, { useMemo, useState } from 'react';

function 부하() {
  let s = 0;
  for (let i = 0; i < 1000000000; i++) {
    s += i;
  }
  return s;
}

function App() {
  const [count, setCount] = useState(0);
  const [countTwo, setCountTwo] = useState(0);

  const handleCountUp = () => {
    setCount(count + 1);
    console.log(count);
  };
  const handleCountUpTwo = () => {
    setCountTwo(countTwo + 1);
    console.log(countTwo);
  };

  console.log('렌더링 발생');
  // 클릭할때마다(handle 이벤트로 인해 count 상태가 변화되고 렌더링이 발생할때마다) 부하가 발생하는 함수가 실행(0~1000000000까지 더하는 for문)
  const result = useMemo(() => {
    return 부하();
  }, [count]);

  return (
    <div className="App">
      <h1>계산 결과 : {result}</h1>
      <p>카운트 1 : {count}</p>
      <button onClick={handleCountUp}>클릭</button>
      <p>카운트 2 : {countTwo}</p>
      <button onClick={handleCountUpTwo}>클릭</button>
    </div>
  );
}
export default App;
