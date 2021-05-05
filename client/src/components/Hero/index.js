import React from "react";

function Hero() {
  return (
    <section className="container-flex">
      <div className="hero is-small">
        <div
          className="hero-body"
          style={{ padding: 0, margin: 0, width: "100%" }}
        >
          <figure
            className="background image"
            style={{ width: "100%", height: "auto", padding: 0 }}
          />
          <img src="/images/books.png" alt="rainbow books" />

          <p
            className="title"
            style={{
              fontSize: "55px",
              color: "white",
              position: "absolute",
              top: "40%",
              left: "30%",
            }}
          >
            Google Book Search
          </p>
          <p
            className="subtitle"
            style={{
              fontSize: "30px",
              color: "white",
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
