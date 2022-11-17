import React from 'react';
import { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState(0);

  const [myInfo, setMyInfo] = useState();

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleGender = (e) => {
    setGender(e.target.value);
  };

  const handleAge = (e) => {
    setAge(e.target.value);
  };

  const handleForm = (e) => {
    e.preventDefault();

    setMyInfo(
      <p>
        제 이름은 {name}입니다. 저는 {gender}이고요. 나이는 {age}살입니다.
      </p>
    );
  };

  return (
    <div>
      <form onSubmit={handleForm}>
        <label htmlFor="name">이름 : </label>
        <input type="text" id="name" onChange={handleName} />
        <br />
        <br />
        <label htmlFor="gender">성별 : </label>
        <input type="text" id="gender" onChange={handleGender} />
        <br />
        <br />
        <label htmlFor="age">나이 : </label>
        <input type="text" id="age" onChange={handleAge} />
        <br />
        <br />
        <button>제출</button>
      </form>
      {myInfo}
    </div>
  );
}

export default App;
