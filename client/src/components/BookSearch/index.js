import React from "react";


const BookSearch = (props) => {
  return (
    <section className= "container-flex">
      <div className="field">
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
            style={{position:"absolute",
              top: "10px",
              left:10}}
            onClick={props.handleFormSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </section>
  );
};

export default BookSearch;
