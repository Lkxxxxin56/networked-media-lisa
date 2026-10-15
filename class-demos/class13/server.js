// import express
const express = require("express");
const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));

// ROUTES: location that we can send and receive info from server
// syntax for GET: app.get(route, anonymous function)
app.get("/", (request, response)=>{
    console.log("received a request at / route");
});

// GET /first-server, callback function
app.get("/first-server", (request, response)=>{
    // send info to the client that makes a request to /first-server
    response.send("this is some data!");
})

// LAST THING ALWAYS ADD
// LISTEN: port, callback function
app.listen(8080, ()=>{
    console.log("http://127.0.0.1:8080/");
});
