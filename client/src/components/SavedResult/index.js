import React from "react";

function SavedResult(props) {
  return (
    <section className="container-flex">
      <div className="columns">
            <h2 style= {{fontSize: "18px"}}>Saved Books</h2>
        <div className= "is-flex is-flex-direction-column">
        <div className="card">
          <div className="media-content">
            <p className="title is-4">{props.title}</p>
            <p className="subtitle is-6">Written by {props.author}</p>
          </div>

          <div className="card-image" style={{ width: "150px", height: "150px"}}>
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
            <a>
            <button className="button is-primary"
              id={""}
              // onClick={()}
              >View Book</button>
            </a>
            <button className="button is-primary"
          id= {""}
          onClick={() => props.handleDeleteButton("")}
        >
            Delete Book</button>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}

export default SavedResult;
