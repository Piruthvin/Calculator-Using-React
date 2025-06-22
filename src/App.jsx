import React, { useState } from "react";

const App = () => {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    if (value === "C") {
      setInput("");
    } else if (value === "=") {
      try {
        setInput(eval(input).toString());
      } catch {
        setInput("Error");
      }
    } else {
      setInput(input + value);
    }
  };

  const buttons = [
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "0", ".", "C", "+",
    "="
  ];

  return (
    <div className="calculator">
      <div className="display">{input || "0"}</div>
      <div className="buttons">
        {buttons.map((btn, index) => (
          <button
            key={index}
            onClick={() => handleClick(btn)}
            className={btn === "=" ? "equal" : isNaN(btn) && btn !== "." && btn !== "C" ? "operator" : ""}
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
};

export default App;
