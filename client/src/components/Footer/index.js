import React from 'react'

function Footer() {
    return (
      <section className="container-flex">
        <footer className="footer"style= {{backgroundColor: "#4a5d23"}}>
        <div className="content has-text-centered" style= {{ color: "white", fontSize: "18px"}}>
          <p> 
            <strong style= {{ color: "white", fontSize: "18px"}}>Google Book Search</strong> by Emily Dobson
          </p>
          <p> Photography from Unsplash</p>
        </div>
      </footer>
      </section>
    )
}

export default Footer; 

