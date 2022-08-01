const express = require("express");
const router = express.Router();
const Todo = require("../models/todo.model");



router.post("/todo", async (req, res) => {
    const todo = await Todo.create(req.body);
    res.send(todo);  
})

router.get("/todos", async (req, res) => {
    const todos = await Todo.find().lean().exec();
    res.status(200).json({todos})
})

router.delete("/delete", async(req,res)=>{
    const remove = await Todo.deleteOne().lean().exec();
    res.status(200).json({remove})
})

module.exports = router;