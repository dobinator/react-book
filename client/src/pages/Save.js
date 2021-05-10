import React, { Component} from 'react';
import API from "../utils/API";
import SavedResult from "../components/SavedResult"; 
 

//findOneBook, deleteBook
class Save extends Component {
state= {
savedBooks: []
};
    
componentDidMount(){
    API.getBooks()
    .then((response)=>{
    this.setState({
    savedBooks: response.data})
    }).catch((err)=>console.log(err))
}  
// handleDeleteButton=

// }    
    
    
    
    
    
    
    
    
    render(){
    
    return (
        <div>
            {/* <BookSearch 
        handleInputChange={this.handleInputChange}
        handleFormSubmit= {this.handleFormSubmit}
        search={this.state.search}/> */}

       <SavedResult
       
       
       />
        </div>
    )
    }
}
; 

export default Save;
