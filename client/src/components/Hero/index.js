import React from 'react'

function Hero() {
    return (
           <section className="hero">
            <div className="hero-body">
              <div className= "container-fluid">
            <figure className= "background image" style={{width: "100%", height: "auto"}}/>
              <img src= "../../images/books.png" alt="rainbow books"/>

              <p className="title" style={{textAlign: "center", fontSize: "black"}}>
            Google Book Search
              </p>
              <p className="subtitle"style={{textAlign: "center", fontSize: "black"}}>
                Search for and Save Books of Interest
              </p>
            </div>
            </div>
          </section>   
    )
}

export default Hero; 
