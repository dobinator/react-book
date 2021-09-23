import React from "react";

function MainPageSection(){

    return (
        <div>
        <section className= "container">
        <h1 style= {{fontSize: "30px", fontWeight: "600", textAlign: "center", color: "#009f6b"}}>Fellow book and dog lovers</h1>
        <h2 style = {{fontSize:"24px", fontWeight: "400", textAlign: "center", marginBottom: "10px"}}> Come explore our store right in the heart of the historic district Tucson</h2>
        <div className= "columns">
            <div className= "column" style= {{backgroundColor: "#f5f5f5", marginTop:"10px"}}>
        <p style = {{ fontSize: "20px", fontWeight: "400", lineHeight: "1.8", marginTop: "15px", color: "#696969"}}>Since opening our doors in 2020,<strong> Dog Eared</strong> has become a fixture in the community. Independent Book store and local owned. </p>
        <div style= {{textAlign:"center"}}>
            <i className="las la-couch"></i>
            <ul>
            <li>On site coffee</li>
            <li>Bistro</li>
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
        </div>

     </div>
        </section> 
        </div>
    )
}

export default MainPageSection;