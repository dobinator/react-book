import React from 'react'

function Footer() {
    return (
      <section className="container-flex">
        <footer className="footer"style= {{backgroundColor: "#a67b5b"}}>
        <div className="content has-text-centered" style= {{ color: "white", fontSize: "18px"}}>
          <p> 
            <strong style= {{ color: "white", fontSize: "18px"}}>Google Book Search</strong> by Emily Dobson
          </p>
        </div>
      </footer>
      </section>
    )
}

export default Footer; 

