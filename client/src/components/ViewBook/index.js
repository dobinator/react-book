import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; 
import API from "../../utils/API";


function ViewBook() {
    const { id } = useParams();
    //  const [data, setData] = useState(id); 
    useEffect(()=> {
     API.getOneBook(id).then((data)=>{
        console.log(data)
     })
    },[]);
    return(
        <div>
            "hello Book data"
           {/* {data} */}
        </div>
)
}


export default ViewBook; 