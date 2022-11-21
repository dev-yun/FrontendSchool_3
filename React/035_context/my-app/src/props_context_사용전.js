import React from 'react';

const Three = (props) => {
  return <div>three : {props.text}</div>;
};

const Two = (props) => {
  return (
    <div>
      two
      <Three text={props.text}></Three>
    </div>
  );
};

const One = (props) => {
  return (
    <div>
      one
      <Two text={props.text}></Two>
    </div>
  );
};

function App() {
  return (
    <div>
      <One text="세번째에서 사용할 내용"></One>
    </div>
  );
}

export default App;
