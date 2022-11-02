import React, { useState } from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [textContent, setTextContent] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const allbuttons = [
    'AC', '+/-', '%', '÷',
    '7', '8', '9', 'x',
    '6', '5', '4', '-',
    '3', '2', '1', '+',
    '0', '.', '=',
  ];

  const handleClick = (e) => {
    const {
      target: { textContent: buttonName },
    } = e;
    const newState = calculate(textContent, buttonName);
    setTextContent(newState);
  };
  const { total, next } = textContent;
  return (
    <div className="main-div">
      <p>Let&apos;s do some math!</p>
      <div className="calculator-div">
        <div className="display-div">{next || total || 0 }</div>
        <section className="button-container">
          {allbuttons.map((btn) => (
            <button
              key={btn}
              name={btn}
              type="button"
              className="buttons"
              onClick={(e) => handleClick(e)}
            >
              {btn}
            </button>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Calculator;
