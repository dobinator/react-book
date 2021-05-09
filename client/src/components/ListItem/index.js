import React from "react";
// functionality for view book
function ListItem(props) {
  return (
    <section className="container-flex">
      <div className="columns is-flex-wrap-wrap is-justify-content-space-around">
        <div
          className="column is-flex-direction"
          style={{
            marginLeft: "10px",
            marginTop: "50px",
            maxWidth: "500px",
          }}
        >
          <div>
            <div className="card is-flex-direction-row">
              <div className="media-content">
                <p className="title is-4" style={{ textAlign: "center"}}>
                  {props.title}
                </p>
                <p
                  className="content"
                  style={{ textAlign: "center", fontSize: "16px"}}
                >
                  Written by {props.authors}
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
                <div className="media">
                  <p
                    className="content"
                    style={{ fontSize: "16px", marginleft: "2rem"}}
                  >
                    {props.description}
                  </p>
                </div>
              </div>
              <div className="control" >
                <a href={""}>
                  <button className="button is-dark"style={{ margin: "2px"}}>View Book</button>
                </a>

                <button
                  className="button is-dark"
                  style={{ margin: "2px"}}
                  onClick={() => props.saveBook(props)}
                >
                  Save Book
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ListItem;
