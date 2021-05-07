import React from "react";
// functionality for view book
function ListItem(props) {
  return (
    <section className="container-flex">
      <div className="columns">
        <div
          className="column"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "50px",
          }}
        >
          <div>
            <div className="card">
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
                  style={{ width: "150px", height: "150px", display: "flex"}}
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
