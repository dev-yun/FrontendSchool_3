// import React, { useState } from 'react';
//
// function Two() {
//   const [value, setValue] = useState('');
//   function onChange(e) {
//     setValue(e.target.value);
//   }
//   return (
//     <>
//       <input type="text" onChange={onChange} />
//       <div>{value}가 강해졌다 돌격해!</div>
//     </>
//   );
// }

// export default Two;

// custom hook 사용
import React from 'react';
import useTest from '../Hooks/useTest';

function Two() {
  const [value, onChange] = useTest('');
  return (
    <>
      <input type="text" onChange={onChange} />
      <div>{value}가 강해졌다 돌격해!</div>
    </>
  );
}
export default Two;
