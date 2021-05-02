import React from "react";

function Navbar() {
  return (
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <h1 class="navbar-item is-size-4">Google Books</h1>

        <a
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item">Search</a>

          <a class="navbar-item">Saved</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
