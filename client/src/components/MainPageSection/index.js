import React from "react";

function MainPageSection(){

    return (

        <div>
        <section className="section is-small">
        <figure>
        <h1 style= {{fontSize: "30px", fontWeight: "600"}}>Fellow book and dog lovers</h1>
        <h2 style = {{fontSize:"24px", fontWeight: "400"}}> Come explore our store right in the heart of the historic district Tucson</h2>
        <p style = {{ fontSize: "22px", fontWeight: "400", lineHeight: "1.8"}}>Since opening our doors in 2020,<strong> Dog Eared</strong> has become a fixture in the community. Independently  and local owned. We offer: </p>
        <ul style= {{marginLeft: "20px",  lineHeight: "2.0", fontSize: "20px", fontWeight: "400"}}>
            <li>On-site coffee house</li>
            <li></li>
            <li>Bistro</li>
            <li>Large collection of new and used books</li>
            <li>Small gift items</li>
            <li>Weekly events</li>
            <li>Well behaved dogs welcome</li>
        </ul>
        <img src="/images/dogReading.png" alt="dog reading book"
        style= {{  display: "block",
                marginLeft: "auto",
                maxWidth: "50%",
                height: "50%",
                opacity: "0.7",
                textAlign: "right"}}
       />
        </figure>   
        </section> 

        </div>
    )
}

export default MainPageSection;