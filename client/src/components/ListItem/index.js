import React from 'react'

function ListItem(props) {
    return (
        <section className="container-flex">
        <div className="columns">
          <div className=" is-flex is-flex-direction-column">
              <div style={{marginTop: "20px"}}>
            <div className="card">
              <div className="media-content">
                <p className="title is-4"style= {{textAlign: "center" }}>{props.title}</p>
                <p className="subtitle is-6"style= {{textAlign: "center" }}>Written by {props.authors}</p>
              </div>
  
              <div className="card-image">
                <figure className = "image"style={{ width: "150px", height: "150px", }}>
                  <img src={props.image} alt="Book cover" />
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                <p className="content" 
                style={{textAlign: "center"}}>
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
        </div>
        </div>
      </section>
    )
}

export default ListItem
