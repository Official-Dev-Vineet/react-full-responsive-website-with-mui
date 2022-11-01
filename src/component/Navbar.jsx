import React, { useState } from "react";
import "./navbar.css";
import Logo from "../images/logo.png";
import { links } from "../data";
import { Link, NavLink } from "react-router-dom";
import { GoThreeBars } from "react-icons/go";

const Navbar = () => {
  const [isNavShowing, setIsNavShowing] = useState(false);
  return (
    <nav>
      <div className="container nav__container">
        <Link to="/home" className="logo" onClick={() => setIsNavShowing(false)}>
          <img src={Logo} alt="logo" />
        </Link>
        <ul
          className={`nav__links ${isNavShowing ? "show__nav" : "hide__nav"}`}
        >
          {links.map(( {name, path}, index) => {
            return (
              <li key={index}>
                <NavLink
                  to={path}
                  className={({ isActive }) => {
                    return isActive ? "active_nav" : "";
                  }}
                  onClick={() => setIsNavShowing((prev) => !prev)}
                >
                  {name}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <button
          type="button"
          className="nav__toggle-btn"
          onClick={() => setIsNavShowing((prev) => !prev)}
        >
          <GoThreeBars title="menu" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
