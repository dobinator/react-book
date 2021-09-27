import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; 
import API from "../../utils/API";


function ViewBook() {
    const { id } = useParams();
    const [book, setBook] = useState(null);

    // const [title, setTitle] = useState("");
    // const [authors, setAuthors] = useState([]);
    // const [image, setImage] = useState("");
    // const [description, setDescription] = useState("");
  useEffect(()=> {
    API.getOneBook(id).then((response)=>{
      console.log(response)
      setBook(response.data.volumeInfo)

    })

  }, []); 
    
    return(
      <section> 
           <div className="columns is-flex-wrap-wrap is-justify-content-space-around"style={{backgroundColor:"#f4f0ec"}} >
                <div className= "column is-flex-direction"
                   style={{
                    marginLeft: "10px",
                    marginTop: "50px",
                    maxWidth: "500px",
                  }}>
         
                 <div className="card is-flex-direction-row" >
                    <div className="media-content">
                    <p className="title is-4" style={{ textAlign: "center" }}>
                      {book?.title}
                    </p>
                 
                    {book?.authors.map((author)=> {
                      return (
                   <p
                    className="content"
                  style=
                  {{ textAlign: "center", fontSize: "16px" }}
                    >
                      {author}
                    </p>
                    )

                    })}                 
                    
                    </div>
                <div className="card-image">
                  <figure
                  style={{
                    width: "175px",
                    height: "175px",
                    display: "flex",
                    marginLeft: "auto",
                    marginRight: "auto",
                    textAlign: "center", 
                    justifyContent: "center"
                  }}
                >
                    <img src = 
                   {book?.imageLinks.thumbnail}
                    alt= "Book cover"/>
                    </figure>
                    </div>
                <div className="card-content">
                     <div className="media">
                    <p
                      dangerouslySetInnerHTML= {{ __html: book?.description}}
                      className="content"
                      style={{ fontSize: "16px", marginleft: "2rem" }}>
                      
                     </p>
                    </div>
                    </div>
                    <div className="control" style={{ textAlign: "center", marginBottom: "30px" }}>
                        <button onClick= ""
                         className="button"
                         style={{
                           margin: "3px", 
                           marginBottom: "3px",
                           backgroundColor: "#32174d",
                           color: "#fff",
                         }}>Home</button>
                        <button onClick=""
                         className="button"
                         style={{
                           margin: "3px",
                           marginBottom: "3px",
                           backgroundColor: "#32174d",
                           color: "#fff",
                         }}>Save</button>
                    </div>
            </div>
           </div>
           </div>
        </section>
      
       )}
      
      
 



export default ViewBook; 