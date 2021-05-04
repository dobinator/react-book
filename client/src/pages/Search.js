import React from 'react';
import BookSearch from "./src/componets/BookSearch";
import API from "./src/utils/API";



class SearchBook extends Component {
state= {
search: "",
books:[],
error: "",
}; 


// function for the input field
handleInputChange= event =>{
this.setState({ search: event.target.value})
}
// function for the submit button
handleFormSubmit = event=>{
event.preventDefault();


}


render()
    return (
     
        <BookSearch/>
    
    )
}

export default Search; 
