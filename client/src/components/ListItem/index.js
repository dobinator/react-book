import React from 'react'

function ListItem(props) {
    return (
        <section className="container-flex">
        <div className="columns">
            <h2 style={{ fontSize: "18px" }}>Search Results</h2>
          <div className=" is-flex is-flex-direction-column">
            <div className="card">
              <div className="media-content">
                <p className="title is-4">{props.title}</p>
                <p className="subtitle is-6">Written by {props.authors}</p>
              </div>
  
              <div className="card-image">
                <figure className = "image is-4by3">
                  <img src={props.image} alt="Book cover" />
                </figure>
              </div>
              <div className="card-content">
                <div className="media"></div>
                <p className="content" style={{ textAlign: "right" }}>
                  {props.description}
                </p>
              </div>
              <div className="control">
                <a href={""}>
                  <button className="button is-dark">View Book</button>
                </a>
  
                <button
                  className="button is-dark"
                  onClick={()=>props.saveBook(props)}
                >
                  Save Book 
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default ListItem
