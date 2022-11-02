import { Component } from 'react';
import { Route, Routes, NavLink } from 'react-router-dom';
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
        <nav className="nav-container">
          <Navbar />
          <ul className="main-nav">
            <li>
              <NavLink to="/">Home |</NavLink>
            </li>
            <li>
              <NavLink to="/calculator">Calculator |</NavLink>
            </li>
            <li>
              <NavLink to="/quote">Quote</NavLink>
            </li>
          </ul>
        </nav>
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
