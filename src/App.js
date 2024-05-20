import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';

function Calculator() {
  const [count, setCount] = useState(1);

  const handleMultiply = () => {
    setCount(prevCount => prevCount * 2);
  };

  const handleDivide = () => {
    setCount(prevCount => prevCount / 2);
  };

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={handleMultiply}>곱하기</button>
      <button onClick={handleDivide}>나누기</button>
    </div>
  );
}

export default Calculator;

// function App() {
//   const [isVisible, setIsVisible] = useState(true);

//   const toggleVisibility = () => {
//     setIsVisible(!isVisible);
//   };

//   return (
//     <div>
//       <button onClick={toggleVisibility}>DEL</button>
//       {isVisible && <img src="logo192.png" />}
//     </div>
//   );
// }

// export default App;