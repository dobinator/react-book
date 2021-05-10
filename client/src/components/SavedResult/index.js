import React from "react";
// functionality deleting and viewing
function SavedResult(props) {
  return (
    <section className="container-flex">
      <div className="columnsis-flex-wrap-wrap is-justify-content-space-around">
        <h2 style={{ fontSize: "18px" }}>Saved Books</h2>
        <div
          className="column is-flex-direction"
          style={{
            marginLeft: "10px",
            maxWidth: "500px",
            marginTop: "50px",
          }}
        >
          <div className="card">
            <div className="media-content">
              <p className="title is-4" style={{ textAlign: "center" }}>
                {props.title}
              </p>
              <p
                className="content"
                style={{ textAlign: "center", fontSize: "16px" }}
              >
                Written by {props.author}
              </p>
            </div>

            <div className="card-image">
              <figure
                style={{
                  width: "175px",
                  height: "175px",
                  display: "flex",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                <img src={props.image} alt="Book cover" />
              </figure>
            </div>

            <div className="card-content">
              <div className="media">
                <p
                  className="content"
                  style={{ fontSize: "16px", marginleft: "2rem" }}
                >
                  {props.description}
                </p>
              </div>
            </div>
            <div className="control" style={{ textAlign: "center" }}>
              <a href= {props.link}>
                <button
                  className="button"
                  style={{ margin: "2px", backgroundColor: "#002147", color: "white"}}
                
                >
                  View Book
                </button>
              </a>
              <button
                className="button is-danger"
                style={{ margin: "2px" }}
                id={""}
                onClick={() => props.handleDeleteButton(props.key)}
              >
                Delete Book
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SavedResult;
