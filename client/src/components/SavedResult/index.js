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
                style={{ width: "175px", height: "175px", display: "flex", marginLeft: "auto",
                marginRight: "auto"}}
              >
                <img src={props.image} alt="Book cover" />
              </figure>
            </div>

            <div className="card-content">
              <div className="media"></div>
              <p
                className="content"
                style={{ fontSize: "16px", marginleft: "2rem"}}
              >
                {props.synopsis}
              </p>
            </div>
          </div>
          <div className="control">
            <a>
              <button
                className="button is-primary"
                style={{ margin: "2px" }}
                id={""}
                // onClick={()}
              >
                View Book
              </button>
            </a>
            <button
              className="button is-primary"
              style={{ margin: "2px" }}
              id={""}
              onClick={() => props.handleDeleteButton("")}
            >
              Delete Book
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SavedResult;
