import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      className="navbar"
      role="navigation"
      style={{ backgroundColor: "#002147" }}
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <h1
          className="navbar-item"
          style={{ color: "white", fontSize: "35px" }}
        >
          Google Books
        </h1>
        <a
          role="button"
          style={{ color: "white" }}
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasic"
          // onClick={toggleBurgerMenu}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasic" className="navbar-menu">
        <div className="navbar-start">
          <Link
            to="/search"
            style={{
              color: "white",
              fontSize: "18px",
              backgroundColor: "#002147",
            }}
            className="navbar-item"
            //  style={{ color: "white", fontSize: "18px" }}onClick={toggleBurgerMenu}
          >
            Search
          </Link>
          <Link
            to="/save"
            style={{
              color: "white",
              fontSize: "18px",
              backgroundColor: "#002147",
            }}
            className="navbar-item"
            //   onClick={toggleBurgerMenu}
          >
            Save
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
