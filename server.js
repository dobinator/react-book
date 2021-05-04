const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 4000;
const app = express();
const routes = require("./routes");
const mongoose = require("mongoose");

// Define the middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//serve up static assets with
if(process.env.NODE_ENV !== 'production') {
    app.use(express.static('client/build')); 
}


//connect to the Mongo DB
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/reactBookdb"
);

// If no API routes are hit, send the React app 
// app.use(function(req, res){
// res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });
app.use(routes);
//start the API server
app.listen(PORT, function (){
    console.log(`API Server now listening on PORT ${PORT}!`);
});

