//initialize express environment
const express = require("express");

//allow the app to use the express package
const app = express();

//------Middleware-----
//cprs
const cors = require("cors");
//morgan
const morgan = require("morgan")

//NEW 4.2 PT 2 : add the path module
const path=require("node:path");
//define a port number for the server to listen for a connection.

const PORT = 3000;

app.use(cors());
app.use(morgan("combined"));
//initialize and retain an index route to automatically render a message when the server starts (THIS ROUTE IS THE ONLY ONE THAT SHOULD BE USED DURING CW)

// -------------PER 2:CW Dynamic Node Review---------
// Tell the app to use express  to 
app.use(express.static(path.join(__dirname+"/public")))
app.get("/", (req, res, next) => {

  // Tell the app to use express and JSON to read data 
  app.use(express.json());

  //Tell the app to use express and urlencoded to scramble form info and set it to true 
  app.use(express.urlencoded({extended:true}))
  // for 4.2Pt 1 Dynamic Node Review
  //response.send("Hello World1!");  // render a str on the page // response.json("hello world");// will send a json msg
 // res.json("Hello World, we're using JSON-Derulo in our apps. That's bae");
 // for 4.2 pt 2 Dynamic Node review
 res.status(200).json({
  success:{message:""},
  statusCode:200
 })
}); // I want to see something when the server starts

app.get("/admin", (req, res, next) => {
    // for 4.2Pt 1 Dynamic Node Review
  //app.send("This route points to the Admin Console page");
  res.status(200).json({
    success:{message:"This route points to the Admin Console page"},
    statusCode:200
  })
});

app.get("/authors", (req, res, next) => {
    // for 4.2Pt 1 Dynamic Node Review
  //res.send("This route points to the Author page");
  res.status(200).json({
    success:{message:"This route points to the Author page"},
    statusCode:200
  })
});

app.get("/books", (req,res,next)=>{
    // for 4.2Pt 1 Dynamic Node Review
    //res.send("This route points to the Books page")
    res.status(200).json({
      success:{message:"This route points to the Books page"},
      statusCode:200
    })
})

app.get("/site-routes", (req,res,next)=>{
    // for 4.2Pt 1 Dynamic Node Review
   // res.send("This route points to the site router page")
   res.status(200).json({
    success:{message:"This route points to the site router page"},
    statusCode:200
  })
})
// new classwork 4.2Pt 2 

// Create 4 NEW GET routes that send a request, receive a response, and move to the next block of code w/ .status().json and a success message :
// PATH: /books/create, HANDLER:"This route points to the Create Book page”
// PATH: /books/:_id, HANDLER: "This route points to the specific book via the ID”
// PATH: /authors/create, HANDLER: "This route points to the Create Author page”
// PATH: /authors/:_id, HANDLER: "This route points to the specific author via the ID”



app.get("/books/create", (req,res,next)=>{

  res.status(200).json({
   success:{message:"This route points to the Create Book page"},
   statusCode:200
 })
 })
app.get("/books/:_id", (req,res,next)=>{

 res.status(200).json({
  success:{message:"This route points to the specific book via the ID"},
  statusCode:200
})
})
app.get("/authors/create", (req,res,next)=>{

 res.status(200).json({
  success:{message:"This route points to the Create Author page"},
  statusCode:200
})
})
app.get("/authors/:_id", (req,res,next)=>{
  
 res.status(200).json({
  success:{message:"This route points to the specific author via the ID"},
  statusCode:200
})
})



//have the app listen at the PORT where a console.log says `Server is listening on ${PORT}. Connection established.`

app.listen(PORT, () => {
  console.log(
    `Server is listening on http://localhost:${PORT}. Connection established.`
  );
  console.log(`Carol's bookstore server is listening on port http://localhost: ${PORT}. Connection established.`);
});




