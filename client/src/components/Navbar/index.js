import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  // function toggleBurgerMenu() {
    // document.querySelector(".navbar-menu").classList.toggle("is-active");
  return (
    <nav class="navbar" role="navigation" style={{ backgroundColor: "#a67b5b"}}aria-label="main navigation">
      <div class="navbar-brand">
        <h1 class="navbar-item" style={{color: "white", fontSize: "35px"}}>Google Books</h1>
        <a
          role="button"
          class="navbar-burger"
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

      <div id="navbarBasic" class="navbar-menu">
        <div class="navbar-start">
        <Link to="/search" 
        style={{ color: "white", fontSize: "18px"}}
        className="navbar-item" 
          //  style={{ color: "white", fontSize: "18px" }}onClick={toggleBurgerMenu}
           >Search
          </Link>
          <Link
            to="/save"
            style={{ color: "white", fontSize: "18px"}}
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
