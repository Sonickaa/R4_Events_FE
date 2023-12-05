import { useState } from "react";
import { NavLink } from "react-router-dom";
import Hamburger from "./Hamburger";
import Brand from "./Brand";
import "./css/Navbar.css";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const closeNavbar = () => {
    setShowNavbar(false);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <Brand />
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <Hamburger />
        </div>
        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <ul>
            <li>
              <NavLink to="/" onClick={closeNavbar}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/events" onClick={closeNavbar}>
                Events
              </NavLink>
            </li>
            <li>
              <NavLink to="/shop" onClick={closeNavbar}>
                Shop
              </NavLink>
            </li>
            {/*   <li>
              <NavLink to="/about" onClick={closeNavbar}>
                About
              </NavLink>
            </li> */}
            <li>
              <NavLink to="/contact" onClick={closeNavbar}>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
