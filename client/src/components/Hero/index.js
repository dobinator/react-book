import React from 'react'

function Hero() {
    return (
           <section className= "container-flex">
            <div className="hero">
              <div className= "hero-body" style={{padding:0, margin:0, width: "100%"}} >
            <figure className= "background image" style={{width: "100%", height: "auto", padding:0}}/>
              <img src= "/images/books.png" alt="rainbow books"/>

              <p className="title" 
              style= {{
              fontSize: "55px", color:"#000036",
              position:"absolute", 
              top: "50%",
              left: "30%",}}> 
              
            Google Book Search
              </p>
              <p className="subtitle"
              style={{
               fontSize:"30px", 
               color: "#000036",
               top: "70%",
              left: "40%",  
               position:"absolute",}}>
                Search for and Save Books of Interest
              </p>
            </div>
            </div>
          </section>   
    )
}

export default Hero; 
