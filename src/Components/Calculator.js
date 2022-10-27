import React, { Component } from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.allbuttons = [
      'AC', '+/-', '%', '÷',
      '7', '8', '9', 'x',
      '6', '5', '4', '-',
      '3', '2', '1', '+',
      '0', '.', '=',
    ];
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (e) => {
    const {
      target: { textContent: buttonName },
    } = e;
    const newState = calculate(this.state, buttonName);
    this.setState(newState);
  }

  render() {
    const { total, next } = this.state;
    return (
      <div className="main-div">
        <div className="display-div">{next || total || 0 }</div>
        <section className="button-container">
          {this.allbuttons.map((btn) => (
            <button
              key={btn}
              name={btn}
              type="button"
              className="buttons"
              onClick={(e) => this.handleClick(e)}
            >
              {btn}
            </button>
          ))}
        </section>
      </div>
    );
  }
}

export default Calculator;
