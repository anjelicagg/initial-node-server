//initialize express environment
const express = require ('express');

//allow the app to use the express package
const app = express();
//define a port number for the server to listen for a connection. 
const PORT = 3000;
//initialize and retain an index route to automatically render a message when the server starts (THIS ROUTE IS THE ONLY ONE THAT SHOULD BE USED DURING CW)
app.get("/", (req , res, next) => {
    //response.send("Hello World1!");  // render a str on the page // response.json("hello world");// will send a json msg
    res.json("Hello World, we're using JSON-Derulo in our apps. That's bae");
}) // I want to see something when the server starts
//have the app listen at the PORT where a console.log says `Server is listening on ${PORT}. Connection established.`

app.listen(PORT, ()=> {

    console.log(`Server is listening on http://localhost:${PORT}. Connection established.`);
})




