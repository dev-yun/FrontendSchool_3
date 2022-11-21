// import React, { useState } from 'react';
//
// function One() {
//   const [value, setValue] = useState('');
//   function onChange(e) {
//     setValue(e.target.value);
//   }
//   return (
//     <>
//       <input type="text" onChange={onChange} />
//       <div>{value}</div>
//     </>
//   );
// }

// export default One;

// custom hook 사용
import React from 'react';
import useTest from '../Hooks/useTest';

function One() {
  const [value, onChange] = useTest('');
  return (
    <>
      <input type="text" onChange={onChange} />
      <div>{value}</div>
    </>
  );
}
export default One;
