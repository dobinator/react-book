import React from "react";


const BookSearch = (props) => {
  return (
    <section className= "container-flex">
      <div className="columns">
        <div className= "column" style= {{ textAlign: "center", width: "50%",  justifyContent: "center"}}>
        <label className="label" style= {{fontSize: "18px", color: "black", padding: "10px" }}>Search for Books</label>
        <div className="control">
          <input
            className="input"
            style= {{ width: "50%", margin: "10px"}}
            type="text"
            value={props.search}
            placeholder="Search for a book by title"
            onChange={props.handleInputChange}
          />
        </div>
        <div className="control">
          <button
            className="button is-dark"
            style={{justifyContent: "center",
              top: "3px",
              left:10}}
            onClick={props.handleFormSubmit}
          >
            Submit
          </button>
          <br></br>
          <br></br>
        <p style={{fontSize: "18px", marginLeft:"10px"}}>No results</p>
        </div>
      </div>
      </div>
    </section>
  );
};

export default BookSearch;
