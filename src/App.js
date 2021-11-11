import './App.css';
import { useState } from 'react';

function App() {
  const [initialColor, setInitialColor] = useState('red');
  const newColor = initialColor === "red" ? "blue" : "red"
  return (
    <div>
      <button style={{ backgroundColor: initialColor }} onClick={() => setInitialColor(newColor)}>
        Change to {newColor}
      </button>
    </div>
  )
}

export default App;
