import React from "react";
// functionality deleting and viewing



function SavedResult(props) {
  return (
    <section className="container-flex" style={{backgroundColor:"#f4f0ec"}}>
        <h2 className="title" 
        style={{ fontSize: "26px", 
        textAlign: "center", 
        marginTop: "15px", 
        color: "#32174d"}}>Saved Books</h2>
      <div className="columns is-flex-wrap-wrap is-justify-content-space-around">
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
            <div className="card-content">
              <div className="media">
                <p
                  className="content"
                  style={{ fontSize: "16px", marginleft: "2rem"}}
                >
                  {props.synopsis}
                </p>
              </div>
            </div>
            <div className="control" style={{ textAlign: "center" }}>
              <a href= {props.link}>
                <button
                  className="button"
                  style={{ margin: "2px", 
                  backgroundColor: "#32174d", 
                  color: "#fff",
                  marginBottom:"3px",}}
                
                >
                  View Book
                </button>
              </a>
              <button
                className="button"
                style={{ margin: "2px",
                backgroundColor: "#f50000",
                marginBottom:"3px", 
                color:"#fff"}}
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
