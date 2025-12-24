//instantiate express app
const express = require('express');
const app = express();

//load config from env files
require("dotenv").config();
const PORT = process.env.PORT || 3000;

//middleware to parse json request body
app.use(express.json());

//import routes for TODO Api
const todoRoutes=require("./routes/todos");
//mount the todo APIsroutes
app.use("/api/v1", todoRoutes);

//start the server
app.listen(PORT, ()=>{
    console.log('Server is running on ${PORT}');
})

//connect to the database
const dbConnect = require("./config/database");
dbConnect();

//default route
app.get("/", (req,res) => {
    res.send("Welcome Alok to 2026");
})