import React from "react";
import { useHistory } from "react-router-dom";
// functionality for view book

//title, authors, small thumbail, info link?
// which will get mapped over the cards?
function ListItem(props) {
  console.log(props)
  const history = useHistory(); 
  return (
    <section className="container-flex" style={{backgroundColor:"#f4f0ec"}}>
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
                <p className="title is-4" style={{ textAlign: "center" }}>
                  {props.title}
                </p>
                <p
                  className="content"
                  style={{ textAlign: "center", fontSize: "16px" }}
                >
                  Written by {props.authors}
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
                    textAlign: "center",  
                    justifyContent: "center"
                  }}
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
              <div className="control" style={{ textAlign: "center" }}>
              
                  <button
                  onClick= {() => history.push(`/ViewBook/${props.id}`) 
                  }
                    className="button"
                    style={{
                      margin: "3px",
                      marginBottom:"3px",
                      backgroundColor: "#32174d",
                      color: "#fff",
                    }}
                  >
                    View Book
                  </button>
               

                <button
                  className="button"
                  style={{
                    margin: "3px",
                    marginBottom:"3px",
                    backgroundColor: "#32174d",
                    color: "#fff",
                  }}
                  onClick={() => props.saveBook(props.id)}
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
