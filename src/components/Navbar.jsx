import "./css/Navbar.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <main className="main-navbar">
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">
            <img className="logo" src="./r4_logo.png" alt="logo" />
          </div>
          {/*  <div className="menu-icon" onClick={handleShowNavbar}>
          <img className="menu-icon" src="/hamburger.png" alt="icon" />
        </div> */}
          <div className={`nav-elements  ${showNavbar && "active"}`}>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/blog">Blog</NavLink>
              </li>
              <li>
                <NavLink to="/projects">Projects</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </main>
  );
};

export default Navbar;
