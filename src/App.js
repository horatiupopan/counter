import logo from './logo.svg';
import './App.css';
import Counter from './counter.js';
import { useState } from 'react';

function App() {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="App">
      <button onClick={() => setIsVisible(!isVisible)}>Set Visible</button>
      {isVisible && <Counter/>} 
    </div>
  );
}

export default App;
