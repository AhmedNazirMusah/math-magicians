import React, { Component } from 'react';
import './Calculator.css';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.allbuttons = [
      'AC', '+/-', '%', '/',
      '7', '8', '9', '*',
      '6', '5', '4', '-',
      '3', '2', '1', '+',
      '0', '.', '=',
    ];
  }

  render() {
    return (
      <div className="main-div">
        <div className="display-div">0</div>
        <section className="button-container">
          {this.allbuttons.map((btn) => (
            <button key={btn} type="button" className="buttons">
              {btn}
            </button>
          ))}
        </section>
      </div>
    );
  }
}

export default Calculator;
