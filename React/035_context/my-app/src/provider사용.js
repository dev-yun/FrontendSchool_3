import React from 'react';
import { createContext } from 'react';

const Contents = createContext({ content: 'context에서 보낸 값입니다.' });

const Three = () => {
  return (
    <Contents.Consumer>
      {(value) => <div>three : {value.content}</div>}
    </Contents.Consumer>
  );
};

const Two = () => {
  return (
    <div>
      Two
      <Contents.Provider
        value={{ content: 'Two에서 context를 변경하였습니다.' }}
      >
        <Three></Three>
      </Contents.Provider>
    </div>
  );
};

const One = () => {
  return (
    <div>
      one
      <Two></Two>
    </div>
  );
};

function App() {
  return (
    <div>
      <One></One>
    </div>
  );
}

export default App;
