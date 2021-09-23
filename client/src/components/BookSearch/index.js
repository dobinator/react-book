import React from "react";


const BookSearch = (props) => {
  return (
    <section className= "container-flex">
      <div className="columns">
        <div className= "column" style= {{ textAlign: "center", width: "50%",  justifyContent: "center"}}>
        <label className="label" style= {{fontSize: "18px", color: "#32174d", padding: "10px", marginTop: "10px", marginBottom: "5px" }}>Search for your next book</label>
        <div className="control">
          <input
            className="input"
            style= {{ width: "40%", margin: "8px"}}
            type="text"
            value={props.search}
            placeholder="Search for a book by title"
            onChange={props.handleInputChange}
          />
        </div>
        <div className="control">
          <button
            className="button"
            style={{justifyContent: "center",
              top: "3px",
              left:10, background: "#32174d", color: "#fff"}}
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
