import React from "react";

function SavedResult(props) {
  return (
    <section className="container-flex">
      <div className="columns">
        <div className= "column">
            <h2>Saved Books</h2>
        <div className="card">
          <div className="media-content">
            <p className="title is-4">{props.title}</p>
            <p className="subtitle is-6">Written by {props.author}</p>
          </div>

          <div className="card-image">
            <figure>
              <img src={props.image} alt="Book cover" />
            </figure>
          </div>
          <div className="card-content">
            <div className="media"></div>
            <p className="content" style={{ textAlign: "right" }}>
              {props.synopsis}
            </p>
          </div>
          <div className="control">
            <button className="button is-primary"
          id= {""}
        >
            Delete Book</button>
            <a>
            <button className="button is-primary">View Book</button>
            </a>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}

export default SavedResult;
