const express = require('express');
const router = express.Router();

//import the controller
const {createTodo}=require("../controllers/createTodo");

//define the api route
router.post("/createTodo", createTodo);

module.exports = router;