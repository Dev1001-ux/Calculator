import { useState } from "react";
import "./App.css";

function Cal({ onInput, onCalculate, onClear, onDel, onHistory }) {
  return (
    <div className="Buttons">
      <button onClick={onClear}>Ac</button>
      <button onClick={() => onInput("00")}>00</button>
      <button onClick={onHistory}>history</button>
      <button onClick={onDel}>Del</button>

      <button onClick={() => onInput("1")}>1</button>
      <button onClick={() => onInput("2")}>2</button>
      <button onClick={() => onInput("3")}>3</button>
      <button onClick={() => onInput("/")}>/</button>

      <button onClick={() => onInput("4")}>4</button>
      <button onClick={() => onInput("5")}>5</button>
      <button onClick={() => onInput("6")}>6</button>
      <button onClick={() => onInput("+")}>+</button>

      <button onClick={() => onInput("7")}>7</button>
      <button onClick={() => onInput("8")}>8</button>
      <button onClick={() => onInput("9")}>9</button>
      <button onClick={() => onInput("-")}>-</button>

      <button onClick={() => onInput(".")}>.</button>
      <button onClick={() => onInput("0")}>0</button>
      <button className="equal" onClick={onCalculate}>
        =
      </button>
      <button onClick={() => onInput("*")}>*</button>
    </div>
  );
}

function CAl() {
  const [display, setDisplay] = useState("");
  const [history, setHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(false);

  // Add value
  const handleInput = (value) => {
    setDisplay((prev) => prev + value);
  };

  // Calculate
  const calculate = () => {
    try {
      const result = eval(display).toString();
      setHistory((prev) => [...prev, `${display} = ${result}`]); // Add to history
      setDisplay(result);
    } catch {
      setDisplay("Error");
    }
  };

  // Clear
  const clearAll = () => {
    setDisplay("");
  };

  // Backspace
  const backSpace = () => {
    setDisplay((prev) => prev.slice(0, -1));
  };

  // Toggle history
  const toggleHistory = () => {
    setShowHistory((prev) => !prev);
  };

  return (
    <div className="main-frame">
      <div className="display">{display || "0"}</div>

      <Cal
        onInput={handleInput}
        onCalculate={calculate}
        onClear={clearAll}
        onDel={backSpace}
        onHistory={toggleHistory}
      />

      {showHistory && (
        <div className="history">
          <h3>History</h3>
          <ul>
            {history.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default CAl;
