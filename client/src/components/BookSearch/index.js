import React from 'react'
import API from "./src/utils/API";

function BookSearch() {
    return (
        <section>
        <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar">
          <a class="navbar-item">
            <strong>Search for a book</strong>
          </a>
          <p class="control" />
            <input class="input" type="text" placeholder="Enter the book title" />
            <p class="control">
              <button class="button is-primary">Search</button>
            </p>
          </div>
          </nav>
          </section>
    )
}

export default BookSearch
