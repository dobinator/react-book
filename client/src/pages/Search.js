import React, { Component } from 'react';
import BookSearch from "../components/BookSearch/index";
// import SearchResult from "../components/SearchResult/index"
import API from "../utils/API";



class SearchBook extends Component {
state= {
search: "",
books:[],
error: "",
}; 

search= ()=>{
API.getGoogleBooks(this.state.search)
.then(data=>{
console.log(data) 
this.setState({
books: data.data.items,
search: ""
})
}) .catch(err=>{console.log(err)})

}
// function for the input field
handleInputChange= event =>{
this.setState({ search: event.target.value})
}
// function for the submit button
handleFormSubmit = event=>{
event.preventDefault();
this.search()

}


render(){
    return (
     <div>
        <BookSearch 
        handleInputChange={this.handleInputChange}
        handleFormSubmit= {this.handleFormSubmit}
        search={this.state.search}/>
        {/* <SearchResult/> */}
    </div>
    )
}
}
export default SearchBook; 
