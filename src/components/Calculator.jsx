import React, { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    if (value === "=") {
      try {
        setResult(eval(expression).toString());
      } catch {
        setResult("Error");
      }
    } else if (value === "C") {
      setExpression("");
      setResult("");
    } else {
      setExpression(expression + value);
    }
  };

  return (
    <div className="calculator">
      <div className="display">
        <div className="expression">{expression}</div>
        <div className="result">{result}</div>
      </div>
      <div className="buttons">
        {["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "=", "+"].map((btn) => (
          <button key={btn} onClick={() => handleClick(btn)}>{btn}</button>
        ))}
        <button className="clear" onClick={() => handleClick("C")}>C</button>
      </div>
    </div>
  );
};

export default Calculator;
