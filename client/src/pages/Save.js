import React, { Component} from 'react';
import API from "../utils/API";

 
class Save extends Component {
state= {
savedBooks: []
};
    
componentDidMount(){
    API.getBooks()
    .then((response)=>{
    this.setState({
    savedBooks: response.data})
    }).catch((error)=>console.log(err))
}  
handleDeleteButton=

}    
    
    
    
    
    
    
    
    
    render(){
    
    return (
        <div>
       <SavedResult/>
        </div>
    )
    }
; 

export default Save;
