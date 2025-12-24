//import the model
const Todo = require("../models/Todo");

//defie the route handler
exports.getTodo= async(req,res) => {
    try{
        const todos = await Todo.find({});

        res.status(200)
        .json({
            success:true,
            data:todos,
            message:"Message fetchedd",
        })
    }
    catch(err){
        console.error(err);
        res.status(500)
        .json({
            success:false,
            message:err.message,
        })

    }
}

//define the route handler to get todo by id
exports.getTodoById = async(req,res) => {
    try{
        const id = req.params.id;
        const todo = await Todo.findById({_id:id});

        if(!todo){
            res.status(404)
            .json({
                success:false,
                message:"Todo not found",
            })
        }

        res.status(200)
        .json({
            success:true,
            data:todo,
            message:"Single ${id} todo fetched successfully",
        })
    }
    catch(err){
        console.error(err);
        res.status(500)
        .json({
            success:false,
            message:err.message,
        })
    }
}