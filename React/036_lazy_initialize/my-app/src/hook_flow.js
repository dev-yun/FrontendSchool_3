import React, { useEffect, useLayoutEffect, useState } from 'react';

/**
 * Mount 순서
 * 1. `Run lazy initializers`
 * 2. `render`
 * 3. `React updates DOM`
 * 4. `Run LayoutEffects`
 * 5. `Browser apints screen`
 * 6. `Run Effects`
 *
 * Update 순서
 * 1. `render`
 * 2. `React updates DOM`
 * 3. `Cleanup LayoutEffects`
 * 4. `Run LayoutEffects`
 * 5. `Browser apints screen`
 * 6. `Cleanup Effects`
 * 7. `Run Effects`
 *
 * unMount 순서
 * 1. `Cleanup LayoutEffects`
 * 2. `Cleanup Effects`
 */
function App() {
  const [num, setNum] = useState(0);

  const handleOnClick = () => {
    setNum(num + 1);
  };

  useLayoutEffect(() => {
    console.log('useLayoutEffect 1');
    return () => {
      console.log('useLayoutEffect return_1');
    };
  }, []);

  useLayoutEffect(() => {
    console.log('useLayoutEffect 2');
    return () => {
      console.log('useLayoutEffect return_2');
    };
  });

  useLayoutEffect(() => {
    console.log('useLayoutEffect 3');
    return () => {
      console.log('useLayoutEffect return_3');
    };
  }, [num]);

  useEffect(() => {
    console.log('useEffect 1');
    return () => {
      console.log('useEffect return_1');
    };
  }, []);

  useEffect(() => {
    console.log('useEffect 2');
    return () => {
      console.log('useEffect return_2');
    };
  });

  useEffect(() => {
    console.log('useEffect 3');
    return () => {
      console.log('useEffect return_3');
    };
  }, [num]);

  return <button onClick={handleOnClick}>{num}</button>;
}

const Wrap = () => {
  const [isVisible, setIsVisible] = useState(true);
  const handleClick = () => setIsVisible(!isVisible);
  return (
    <>
      <button onClick={handleClick}>
        {isVisible ? '언마운트시키기' : '마운트시키기'}
      </button>
      <br></br>
      {isVisible && <App />}
    </>
  );
};

export default Wrap;
