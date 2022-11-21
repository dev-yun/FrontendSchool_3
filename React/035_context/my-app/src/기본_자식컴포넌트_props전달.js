import React from 'react';

const HelloLicat = ({ name, id }) => {
  return (
    <div>
      <h2>{id}</h2>
      <strong>{name}</strong>
      <HelloLicatTwo id={id} name={name} />
    </div>
  );
};

const HelloLicatTwo = ({ name, id }) => {
  return (
    <div>
      <h2>Two : {id}</h2>
      <strong>Two : {name}</strong>
    </div>
  );
};

const App = () => {
  return <HelloLicat name="gary" id="garyIsFree" />;
};

export default App;

/**
 * 이렇게 객체의 내부 속성을 빼낼 수 있음
const App = () => {
  return (
    <HelloLicat value={{ name: "gary", id: "garyIsFree" }} />
  );
};

const HelloLicat = ({value:{name, id}}) => {
  return (
    <div>
      <h2>{id}</h2>
      <strong>{name}</strong>
      <HelloLicatTwo value={{name, id}}/>
    </div>
  );
};

const HelloLicatTwo = ({value:{name, id}}) => {
  return (
    <div>
      <h2>Two : {id}</h2>
      <strong>Two : {name}</strong>
    </div>
  );
};
 */
