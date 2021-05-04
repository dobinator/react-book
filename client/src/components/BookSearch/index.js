import React from "react";


const BookSearch = (props) => {
  return (
    <section>
      <div className="field">
        <label className="label">Search for Books</label>
        <div className="control">
          <input
            className="input"
            type="text"
            value={props.search}
            placeholder="Search for a book by title"
            onChange={props.handleInputChange}
          />
        </div>
        <div className="control">
          <button
            className="button is-primary"
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
