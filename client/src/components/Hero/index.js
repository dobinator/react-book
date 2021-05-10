import React from "react";

function Hero() {
  return (
    <section className="container-flex">
      <div className="hero">
        <div
          className="hero-body"
          style={{ padding: 0,
             margin: "0%",
             width: "100%", 
             position: "relative" }}
        >
          <figure
            className="background image"
            style={{
              width: "100%",
              height: "auto",
              padding: 0,
              position: "relative",
            }}
          />
          <img src="/images/books.png" alt="rainbow books" />

          <p
            className="title"
            style={{
              textAlign: "center",
              fontSize: "55px",

              color: "#002147",
              position: "absolute",
              top: "40%",
              left: "30%",
              transform: "translate(-10px, -40px)",
            }}
          >
            Google Book Search
          </p>
          <p
            className="subtitle"
            style={{
              fontSize: "30px",
              color: "#002147",
              top: "65%",
              left: "40%",
              position: "absolute",
            }}
          >
            Search for and Save Books of Interest
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
