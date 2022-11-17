import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';

function App() {
  const name = useRef('');
  const gender = useRef('');
  const age = useRef(0);

  const [myInfo, setMyInfo] = useState();

  const handleInput = (e) => {
    e.preventDefault();

    setMyInfo(
      <p>
        제 이름은 {name.current.value}입니다. 저는 {gender.current.value}이고요.
        나이는 {age.current.value}살입니다.
      </p>
    );
  };

  return (
    <div>
      <form onSubmit={handleInput}>
        <label htmlFor="name">이름 : </label>
        <input type="text" id="name" ref={name} />
        <br />
        <br />
        <label htmlFor="gender">성별 : </label>
        <input type="text" id="gender" ref={gender} />
        <br />
        <br />
        <label htmlFor="age">나이 : </label>
        <input type="text" id="age" ref={age} />
        <br />
        <br />
        <button>제출</button>
      </form>
      {myInfo}
    </div>
  );
}

export default App;
