import { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import Calculator from './Components/Calculator';
import Homepage from './Components/homepage';
import Navbar from './Components/Navigation';
import Quote from './Components/Shortquote';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.allbuttons = {};
  }

  render() {
    return (
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/quote" element={<Quote />} />
        </Routes>
      </>
    );
  }
}

export default App;
