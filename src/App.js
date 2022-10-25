import { Component } from 'react';
import Calculator from './Components/Calculator';

class App extends Component {
  constructor(props) {
    super(props);
    this.allbuttons = {};
  }

  render() {
    return (
      <div>
        <Calculator />
      </div>
    );
  }
}

export default App;
