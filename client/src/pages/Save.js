import React, { Component} from 'react';
import API from "../utils/API";
import SavedResult from "../components/SavedResult"; 


//findOneBook, deleteBook
class Save extends Component {
state= {
savedBooks: []
};
    
componentDidMount(){
this.getSavedBook()
} 

handleDeleteButton=id=> {
API.deleteBook(id)
.then(data=>this.getSavedBook() )
}

 getSavedBook=()=>{
    API.getAllBooks()
    .then((response)=>{
    this.setState({
    savedBooks: response.data})
    }).catch((err)=>console.log(err))  
 } 
     
    
    render(){
    
    return (
        <div>
         {this.state.savedBooks.length ? (
          <div>
              {this.state.savedBooks.map((book)=> (
                <SavedResult 
key= {book._id}
title= {book.title}
author= {book.authors.join(", ")}
image={book.image}
description= {book.description}
handleDeleteButton= {this.handleDeleteButton}
link= {book.link}
/>
              ))}
          </div>   
         ):(
             <h1>No Saved Books</h1>
         )}  
   
        </div>
    )
    }
}
; 

export default Save;
