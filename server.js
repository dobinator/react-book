const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 6000;
const app = express();

// Define the middleware here
app.use(express.urlencode({ extended: true }));
app.use(express.json());
//serve up static assets with
if(process.env.NODE_ENV !== 'production') {
    app.use(express.static('client/build')); 
}

//add Routes, both API and view 
app.use(routes);

//connect to the Mongo DB
mongoose.connect(
    process.env.MONGODB_URI || "mongobd://localhost/reactBookdb"
);

// If no API routes are hit, send the React app 
app.use(function(req, res){
res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

//start the API server
app.listen(PORT, function (){
    console.log(`API Server now listening on PORT ${PORT}!`);
});

