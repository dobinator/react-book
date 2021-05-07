import React, { Component } from 'react';
import BookSearch from "../components/BookSearch/index";
import SearchResult from "../components/SearchResult/index"
import API from "../utils/API";

//findAllBooks or is it getAllBooks? save Book, findOneBook or getOneBook?

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

// api need to retrieve the data from the arrays
//title, authors, small thumbail, info link? 
// which will get mapped over the cards?

// function for the input field
handleInputChange= event =>{
this.setState({ search: event.target.value})
}
// function for the submit button
handleFormSubmit = event=>{
event.preventDefault();
this.search()

}

saveBook= book=>{
API.saveBook({
id: book.id, title: book.title, authors: book.authors, 
synopsis: book.synopsis, 
}).then(data=>console.log(data))
.catch(err=>console.log(err));
}

render(){
    return (
     <div>
        <BookSearch 
        handleInputChange={this.handleInputChange}
        handleFormSubmit= {this.handleFormSubmit}
        search={this.state.search}/>
        {this.state.books.length ? (
            <SearchResult saveBook= {this.saveBook} 
            booksState={this.state.books}/>

        ):(
            <div>
                
            </div>
        )}
    </div>
    )
}
}
export default SearchBook; 
