import React from 'react'

function Hero() {
    return (
           <section className="hero">
            <div className="hero-body">
            <figure className= "image" style={{width: "100%", height: "auto"}}/>
              <img src= "./images/books.jpg" alt="rainbow books"/>
              <p className="title" style={{textAlign: "center", fontSize: "white"}}>
            Google Book Search
              </p>
              <p className="subtitle"style={{textAlign: "center", fontSize: "white"}}>
                Search for and Save Books of Interest
              </p>
            </div>
          </section>   
    )
}

export default Hero; 
