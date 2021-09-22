import React from "react";

function MainPageSection(){

    return (

        <div>
        <section className="section is-small">
        <figure>
        <img src="/images/dogReading.png" alt="dog reading book"
        style= {{  display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                maxWidth: "50%",
                height: "50%",
                opacity: "0.7"}}
       />
        </figure>   
        <h1 className="title">Google Book Search</h1>
        <h2 className="subtitle">  
        </h2>
        </section> 

        </div>
    )
}

export default MainPageSection;