import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; 
import API from "../../utils/API";


function ViewBook() {
    const { id } = useParams();
    const [book, setBook] = useState({});

    // const [title, setTitle] = useState("");
    // const [authors, setAuthors] = useState([]);
    // const [image, setImage] = useState("");
    // const [description, setDescription] = useState("");


    useEffect(()=> {
      API.getOneBook(id).then((data)=>{
          setBook(data)
         console.log(data)
      })
     },[id]);



  
    // useEffect(()=> {
    //   async function fetchData() {
    //     const res = await fetch(API.getOneBook(id));
    //     res
    //     .json()
    //     .then(res => setTitle(res))
    //     .then(res => setAuthors(res))
    //     .then(res => setImage(res))
    //     .then(res => setDescription(res))
    //     .catch(err => console.log(err));
      
    //     fetchData(); 
    //   } });
      
    //  API.getOneBook(id).then((data)=> {
    //    console.log(data)
    //  })
     
    //  const fetchData = async () => {
    //    try {
    //      const response = await fetch(API.getOneBook(id));
    //      const json = await response.json();
    //      console.log(json); 
    //     } catch(error){
    //       console.log("error", error); 
    //     }
    //   }; 
    //   fetchData()
   


    // function loadResult(){
    //   setBook()
    //  }
    //onload= {loadResult}> 
    return(
      <section> 
        {/* {books.map(id => { */}
           <div className="columns is-flex-wrap-wrap is-justify-content-space-around" >
                <div className= "column is-flex-direction"
                   style={{
                    marginLeft: "10px",
                    marginTop: "50px",
                    maxWidth: "500px",
                  }}>
         
                 <div className="card is-flex-direction-row" >
                    <div className="media-content">
                    <p className="title is-4" style={{ textAlign: "center" }}>
                      {/* {JSON.stringify(id.title)} */}
                    </p>
                     <p
                  className="content"
                  style={{ textAlign: "center", fontSize: "16px" }}
                    >
                      {/* Written by {JSON.stringify(id.authors)} */}
                    </p>
                    </div>
                <div className="card-image">
                  <figure
                  style={{
                    width: "175px",
                    height: "175px",
                    display: "flex",
                    marginLeft: "auto",
                    marginRight: "auto",
                    textAlign: "center"
                  }}
                >
                    <img src = ""
                    // {JSON.stringify(data.image)} 
                    alt= "Book cover"/>
                    </figure>
                    </div>
                <div className="card-content">
                     <div className="media">
                    <p
                      className="content"
                      style={{ fontSize: "16px", marginleft: "2rem" }}>
                       {/* {JSON.stringify(data.description)}  */}
                     </p>
                    </div>
                    </div>
                    <div className="control" style={{ textAlign: "center" }}>
                        <button></button>
                        <button></button>
                    </div>
            </div>
           </div>
           </div>
        </section>
      
       )}
      
      
 



export default ViewBook; 