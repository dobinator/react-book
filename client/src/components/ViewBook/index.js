import React, { useEffect } from "react";
import { useParams } from "react-router-dom"; 
import API from "../../utils/API";


function ViewBook() {
    const { id } = useParams();
    useEffect(()=> {
     API.getOneBook(id).then((data)=>{
        console.log(data)
     })
    },[]);
    return(
        <div>
            "Hello World!"
        </div>
)
}


export default ViewBook; 