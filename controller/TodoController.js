const TodoModel=require('../models/TodoModel')


module.exports.getTodo=async(req,res)=>{
    const todo= await TodoModel.find()
    res.send(todo)
}


module.exports.addTodo=async(req,res)=>{
    const {text}=req.body
    TodoModel.create({text})
    .then((data)=>{
        console.log("Task Added Successfully");
        console.log(data);
        res.send(data);
    })
}


module.exports.updateTodo=async(req,res)=>{
    const {_id,text}=req.body
    TodoModel.findByIdAndUpdate(_id,{text})
    .then(()=>res.send("Task Updated Succesfully"))
    .catch((err)=>console.log(err))
    
}


module.exports.deleteTodo=async(req,res)=>{
    const {_id}=req.body
    TodoModel.findByIdAndDelete(_id)
    .then(()=>res.send("Task Deleted Succesfully"))
    .catch((err)=>console.log(err))
    
}