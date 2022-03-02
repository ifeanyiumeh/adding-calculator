import { useState } from "react";
import "./App.css";

function App() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [total, setTotal] = useState(number1 + number2);

  function handleNumber1change(e) {
    setNumber1(Number(e.target.value));
  }

  function handleNumber2change(e) {
    setNumber2(+e.target.value);
  }
  function calculateTotal() {
    setTotal(number1 + number2);
  }

  return (
    <div className="App">
      <h1>Adding two numbers</h1>

      <div className="number-inputs">
        <input type="number" placeholder="0" onChange={handleNumber1change} />
        <input type="number" placeholder="0" onChange={handleNumber2change} />
      </div>

      <button onClick={calculateTotal}>Add EM </button>

      <h2>{total}</h2>
    </div>
  );
}

export default App;
