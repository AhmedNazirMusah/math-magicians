import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav className="nav-container">
    <div className="main-title">Math Magicians</div>
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
);

export default Navbar;
