import React from "react"; 

function ViewBtn(props) {
    return (
      <span className="viewBtn" {...props} role="button" tabIndex="0">
        ✗
      </span>
    );
  }
  
  export default ViewBtn;