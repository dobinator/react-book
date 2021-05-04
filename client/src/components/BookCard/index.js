import React from "react";
import API from "./src/utils/API";
// figure will need a style once thumbnail is grabbed.
//paragraph might need to be fixed depending on the layout.

const BookCard= (props)=> {
  return (
    <section class="container-flex">
      <div class="columns">
        <div class="card">
          <div class="media-content">
            <p class="title is-4">{props.title}</p>
            <p class="subtitle is-6">Written by {props.author}</p>
          </div>

          <div class="card-image">
            <figure>
              <img src={props.image} alt="Book cover" />
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
            </div>
            <p class="content" style={{ textAlign: "right" }}>
             {props.synopsis}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BookCard;
