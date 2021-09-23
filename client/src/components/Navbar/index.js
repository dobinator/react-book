import React from "react";
import { Link } from "react-router-dom";

function Navbar() {

  function toggleBurgerMenu(){
    document.querySelector(".navbar-menu").classList.toogle("is-active");
  }
  return (
    <nav
      className="navbar"
      role="navigation"
      style={{ backgroundColor:"#734f96" }}
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <h1
          className="navbar-item"
          style={{ color: "#fff", fontSize: "40px"}}
        >
         Dog Eared
        </h1>
        <button
            style={{ color: "#fff" }}
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasic"
            onClick={toggleBurgerMenu}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>
      </div>

      <div id="navbarBasic" className="navbar-menu is-active">
        <div className="navbar-start">
          <Link
            to="/search"
            style={{
              color: "#fff",
              fontSize: "20px",
              backgroundColor: "#734f96",
              fontWeight: "600"
            }}
            className="navbar-item"
            // style={{ color: "#fff", fontSize: "18px" }}onClick={toggleBurgerMenu}
          >
            Search
          </Link>
          <Link
            to="/save"
            style={{
              color: "#fff",
              fontSize: "20px",
              backgroundColor: "#734f96",
              fontWeight: "600"
            }}
            className="navbar-item"
            //   onClick={toggleBurgerMenu}
          >
            Save
          </Link>

      <div className="navbar-item has-dropdown is-hoverable">
        <Link className="navbar-link is-arrowless"
        style= {{ color: "#fff",
              fontSize: "20px",
              backgroundColor: "#734f96",
              fontWeight: "600"}}>
          More
        </Link>

        <div className="navbar-dropdown">
        <Link className="navbar-item" 
          style ={{ color: "#fff",
          fontSize: "20px",
          backgroundColor: "#734f96",
          fontWeight: "600"}}>
         Hours and FAQ
          </Link>
          <Link className="navbar-item" 
          style ={{ color: "#fff",
          fontSize: "20px",
          backgroundColor: "#734f96",
          fontWeight: "600"}}>
            Calendar
          </Link>
          <Link className="navbar-item" 
          style = {{
            color: "#fff",
          fontSize: "20px",
          backgroundColor: "#734f96",
          fontWeight: "600"
          }}>
            Menu
          </Link>
          <Link className="navbar-item"
          style = {{color: "#fff",
          fontSize: "20px",
          backgroundColor: "#734f96",
          fontWeight: "600"}}
           > Contact Us
          </Link>
          <Link className="navbar-item" style= {{color: "#fff",
          fontSize: "20px",
          backgroundColor: "#734f96",
          fontWeight: "600"}}>
            Careers
          </Link>
          </div>
          </div>
          <div class="navbar-end">
          <div class="navbar-item" style={{color:"#fff", fontWeight: "600", fontSize: "16px", marginLeft: "30px"}}>
            207 5th Avenue, Tucson AZ 
        </div>
        <div class="navbar-item" style={{color:"#fff", fontWeight: "600", fontSize: "16px",  marginLeft: "30px"}}>
            520-555-5554
        </div>
       </div> 
      </div>
      </div>
    </nav>
  );
}

export default Navbar;
