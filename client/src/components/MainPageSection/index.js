import React from "react";

function MainPageSection(){

    return (
        <div>
        <section className= "container">
        <h1 style= {{fontSize: "30px", fontWeight: "500", textAlign: "center", color: "#009f6b"}}>Fellow book and dog lovers unite</h1>
        <h2 style = {{fontSize:"24px", fontWeight: "400", textAlign: "center", marginBottom: "10px"}}> Come explore our store right in the heart of historic Tucson</h2>
        <div className= "columns">
            <div className= "column" style= {{ marginTop:"10px"}}>
        <div style= {{textAlign:"center", marginBottom: "20px"}}>
            <i className="las la-couch"></i>
            <ul>
            <li>On site coffee/ Bistro</li>
            <li>Free Wifi</li>
            <li>Comfy seats</li>
            </ul>
            <br></br>
            <i className="las la-book"></i>
            <ul>
            <li>Large Collection of new and used books</li>
            <li>Special orders welcome</li>
            <li>Small gift items</li>
            </ul>
            <br></br>
             <i className="las la-thumbs-up"></i>
            <ul>
            <li>Weekly activities</li>
            <li>Friendly staff</li>
            <li>Well-behaved dogs welcomed</li>
            </ul>
        </div> 
            </div>
        <div className= "column">
            <figure>
            <img src="/images/dogReading.png" alt="dog leaning on books while reading a book"
                style= {{  display: "block",
                marginTop: "30px",
                marginLeft: "auto",
                maxWidth: "70%",
                height: "70%",
                opacity: "0.7",
                textAlign: "right"}}
                />
            </figure> 
            <p style = 
            {{ fontSize: "16px", 
            fontWeight: "400", 
            lineHeight: "1.5", 
            marginTop: "15px", 
            color: "#696969"}}>
                Since opening our doors in 2000,<strong> Dog Eared</strong> has become a fixture in the community. We take pride in being an independent book store and local owned. We are currently only open by appointment due to COVID.</p>
        </div>

     </div>
        </section> 
        </div>
    )
}

export default MainPageSection;