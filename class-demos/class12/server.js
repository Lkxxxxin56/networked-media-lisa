// import express
const express = require("express");
const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));

// ROUTES: location that we can send and receive info from server
// GET /first-server, callback function
app.get("/first-server", (request, response)=>{
    // send info to the client that makes a request to /first-server
    response.send("the first-server is working");
})

// LAST THING ALWAYS ADD
// LISTEN: port, callback function
app.listen(8080, ()=>{
    console.log("http://127.0.0.1:0000/");
});
