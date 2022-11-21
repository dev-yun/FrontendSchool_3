import { useState, useEffect, useLayoutEffect } from 'react';

// layoutEffect => painting => Effect 순으로 실행되므로 Effect를 사용하면 paiting보다 늦게 실행되서 깜빡임이 조금 발생함
// => 이를 해결하기 위해 layoutEffect를 대신 사용하여 painting전에 먼저 코드를 실행하여 깜빡임을 방지 가능
function App() {
  const [value, setValue] = useState(100);

  // 조금 더 자세히 설명하면 value=100에서 onClick이벤트 발생시 value=1000으로 변하고 painting이 실행되며 그 다음 Effect가 실행되어 value=300으로 줄어든다.
  // 즉, 잠깐 1000이 되는 경우가 존재
  useLayoutEffect(() => {
    if (value >= 1000) {
      setValue(300);
    }
  }, [value]);

  return (
    <div>
      {/* <div style={{ width: value, height: value, backgroundColor: 'blue', transition: '1s all' }}></div> */}
      <div
        style={{ width: value, height: value, backgroundColor: 'blue' }}
      ></div>
      <button
        onClick={() => {
          setValue(1000);
        }}
      >
        커져랏!
      </button>
      <button
        onClick={() => {
          setValue(200);
        }}
      >
        작아져랏!
      </button>
    </div>
  );
}

export default App;
