import React from 'react';
import BookCard from "./src/componets/Bookcard"; 
import BookSearch from "./src/componets/BookSearch";
import API from "./src/utils/API";



const Search = () => {

    
const [userInput, setUserInput]= useState("");
const [searchedBooks, setSearchedBooks]= useState([]); 










    return (



        <div> 
     
        <BookSearch/>
          
        </div>
    )
}

export default Search; 
