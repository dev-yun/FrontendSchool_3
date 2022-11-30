import { useState } from 'react';
import './App.css';

function App() {
  const [isClicked, setIsClicked] = useState(false);

  const handleButton = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div>
      {isClicked ? (
        <button style={{ backgroundColor: 'blue' }} onClick={handleButton}>
          change to red!
        </button>
      ) : (
        <button style={{ backgroundColor: 'red' }} onClick={handleButton}>
          change to blue!
        </button>
      )}
    </div>
  );
}

export default App;
