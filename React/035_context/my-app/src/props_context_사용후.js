import React from 'react';
import { createContext } from 'react';

const Contents = createContext({ content: 'context에서 보낸 값입니다.' });

const Three = () => {
  return (
    <Contents.Consumer>
      {(e) => <div>three : {e.content}</div>}
    </Contents.Consumer>
  );
};

const Two = () => {
  return (
    <div>
      <Three></Three>
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
